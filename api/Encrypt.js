const crypto = require("crypto");
const { uptime } = require("process");

module.exports = class Encrypt {

  static encrypt(password) {
    return (
    crypto
    .createHmac("sha256", "Attack of the Clones")
    .update(password)
    .digest("hex")
  );
}
};