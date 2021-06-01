const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creation of intern object", () => {
  const intern = new Intern("Emily", "123", "emily@gmail.com", "Northwestern University");
  expect(typeof intern).toBe("object");
});

test("getRole returns employee role = Intern", () => {
  const intern = new Intern("Emily", "123", "emily@gmail.com", "Northwestern University");
  expect(intern.getRole()).toBe("Intern");
});
