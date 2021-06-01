const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("creation of manager object", () => {
  const manager = new Manager("Emily", "123", "emily@gmail.com", "1B");
  expect(typeof manager).toBe("object");
});

test("getRole returns employee role = Manager", () => {
  const manager = new Manager("Emily", "123", "emily@gmail.com", "1B");
  expect(manager.getRole()).toBe("Manager");
});
