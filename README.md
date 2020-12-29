# Who Was Phone?

This is a React Native application that uses the
[numverify API](https://numverify.com/) to resolve phone numbers.

# Usage

To use this application, you must first provide your own API key from the
website in the form of a ES module (`src/utils/apiKey.js`):
```js
export const apiKey = "your API key here";
```

## Home screen

This screen will display phone numbers that have been resolved previously, or
tell you that there are no entries to display and you should submit some.

The `Submit` button to navigate away from this screen to the submit screen can
be found in the header's right side.

Once there are successful submissions, the suggestion will be replaced by a
chronologically sorted list of entries from most recent to oldest. The list
items will display the international phone number format, the country of the
phone number in the form of a flag icon and the datetime of submission.

Pressing on the entries in the list will navigate to the details screen that
displays more information about the submission.

## Submit screen

The submit screen will present an input field which validates text entered into
it by rejecting non-numeric characters. This is where the user may enter a
phone number to fetch some information about it.

Submitting the number can be done with the keyboard's send button, or the
button below the text input field. This button cannot be pressed until there is
some text in the input field. Once the request starts, the button will serve as
a cancel button to stop the request. The pending request can also be cancelled
by navigating back to the home screen.

While there is a pending request, there will be an activity indicator below the
cancel button. If there was an error, the activity indicator will be replaced
by a text box that will display some information about the error.

If the submission is successful, then the screen will navigate back to the home
screen with the entry present in the list of submissions.

## Details screen

This screen will display a little more information about the entry that was
selected in the home screen.

The phone number details can also be pressed to copy their contents. Once the
detail has been successfully put into the clipboard, a little toast
notification will provide feedback to the user.

This screen also provides a way to remove submissions. The `Remove` button can
be found in the header on the right side. Pressing this button will remove the
submission from storage and navigate the user back to the home screen, where
the deleted entry will be gone.
