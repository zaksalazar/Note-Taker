// generates a random string for a UUID
module.exports = () =>
Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);