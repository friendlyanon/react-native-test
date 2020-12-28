/**
 * @format
 */

import ky from "ky";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useResolved } from "./hooks/useResolved";
import { formattedDate } from "./utils/formattedDate";

import { NumberInput } from "./component/NumberInput";

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  label: {},
  input: {},
  button: {},
  loader: {},
  errorBox: {},
});

const url = "https://numvalidate.com/api/validate";
// https://numvalidate.com/numvalidate-docs/index.html#errors
const errorMap = new Map([
  [400, "HTTP error (400)"],
  [401, "HTTP error (401)"],
  [404, "HTTP error (404)"],
  [405, "HTTP error (405)"],
  [406, "HTTP error (406)"],
  [429, "You have reached the service limit for today."],
  [500, "There was an issue with the service. Please try again later."],
  [503, "Service is temporarily offline. Please try again later."],
]);

class InvalidError extends Error {
  constructor(...args) {
    super(...args);
    this.name = "InvalidError";
  }
}

const submit = async (number, controller) => {
  const { data } = await ky.get(url, {
    searchParams: { number },
    signal: controller.signal,
  }).json();
  if (data.valid !== true) {
    throw new InvalidError();
  }

  // https://numvalidate.com/numvalidate-docs/index.html#validation
  return {
    id: data.e164format,
    formatted: data.internationalFormat,
    country: data.countryName,
    countryCode: data.countryCode,
    input: number,
    date: formattedDate(),
  };
};

const handleError = (setLoading, setError, setController, error) => {
  setLoading(false);
  if (error.name === "AbortError") {
    setController(new AbortController());
    return;
  }

  if (error.name === "InvalidError") {
    setError("Invalid number.");
    return;
  }

  const unknownError = () => {
    console.error(error);
    setError("Unknown error.");
  };

  if (error.name === "HTTPError") {
    const message = errorMap.get(error.response.status);
    if (message != null) {
      setError(message);
    } else {
      unknownError();
    }
  } else if (error.name === "TimeoutError") {
    setError("Timeout error.");
  } else {
    unknownError();
  }
};

const ErrorBox = ({ error }) => (
  <Text style={style.errorBox}>{error}</Text>
);

export const Submit = ({ navigation }) => {
  const { add } = useResolved();
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [controller, setController] = useState(new AbortController());
  const onSubmit = () => {
    setLoading(true);
    setError("");
    submit(number, controller)
      .then(add)
      .then(() => navigation.navigate("Home"))
      .catch(handleError.bind(null, setLoading, setError, setController));
  };

  useEffect(
    () => navigation.addListener("beforeRemove", () => controller.abort()),
    [navigation, controller],
  );

  const button = isLoading
    ? (<Button title="Cancel" onPress={() => controller.abort()} />)
    : (<Button title="Submit" onPress={onSubmit} />);

  return (
    <View style={style.wrapper}>
      <Text style={style.label}>Phone number:</Text>
      <NumberInput
        autoCorrect={false}
        autoFocus={true}
        editable={!isLoading}
        keyboardType="phone-pad"
        onChangeText={setNumber}
        onSubmitEditing={onSubmit}
        placeholder="Enter a phone number"
        style={style.input}
        returnKeyType="send"
        value={number}
      />
      {button}
      {isLoading ? (<ActivityIndicator size="large" />) : null}
      {error ? (<ErrorBox error={error} />) : null}
    </View>
  );
};
