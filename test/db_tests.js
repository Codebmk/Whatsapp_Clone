const mocha = require("mocha");
const assert = require("assert");
const User = require("../models/user");

describe("Saving records", done => {
  // creates test
  it("Adds user to db", () => {
    var user = new User({
      username: "Belinda",
      phone_number: "0770827085",
      statusMessage: "Available"
    });
    user.save().then(() => {
      assert(user.isNew === false);
      done();
    });
  });
});
