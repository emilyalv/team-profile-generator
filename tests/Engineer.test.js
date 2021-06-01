const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creation of engineer object", () => {
  const engineer = new Engineer("Emily", "123", "emily@gmail.com", "emilyalv");
  expect(typeof engineer).toBe("object");
});

test("getRole returns employee role = Engineer", () => {
  const engineer = new Engineer("Emily", "123", "emily@gmail.com", "emilyalv");
  expect(engineer.getRole()).toBe("Engineer");
});
