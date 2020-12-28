/**
 * @format
 */

const twoDigits = (number) => String(number).padStart(2, "0");

export const formattedDate = () => {
  const now = new Date();
  const date = `${
    now.getFullYear()
  }. ${
    twoDigits(now.getMonth() + 1)
  }. ${
    twoDigits(now.getDate())
  }.`;
  const time = `${
    twoDigits(now.getHours())
  }:${
    twoDigits(now.getMinutes())
  }:${
    twoDigits(now.getSeconds())
  }`;
  return `${date} ${time}`;
};
