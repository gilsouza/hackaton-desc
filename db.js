/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");

module.exports = () => {
  const data = {
    tasks: [
      {
        "text": "Task 1",
        "day": "2021-04-01T00:55",
        "important": true,
        "id": 1
      },
      {
        "text": "Task2",
        "day": "2021-05-08T12:55",
        "important": false,
        "id": 2
      }
    ]
  };
  return data;
};
