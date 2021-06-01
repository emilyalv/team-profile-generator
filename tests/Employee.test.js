const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creation of employee object", () => {
  const employee = new Employee("Emily", "123", "emily@gmail.com", "emilyalv");
  expect(typeof employee).toBe("object");
});

test("getName returns employee name", () => {
  const employee = new Employee("Emily", "123", "emily@gmail.com");
  expect(employee.getName()).toBe("Emily");
});
