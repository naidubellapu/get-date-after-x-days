const addDays = require("date-fns/addDays");

function days(number) {
  let date = addDays(new Date(2020, 7, 22), number);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

module.exports = days;
