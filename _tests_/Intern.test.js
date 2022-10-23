const Intern = require("../lib/Intern");
const intern = new Intern('tester', 5, 'email@email.com', 'UCLA');

test("Can set school via constructor", () => {
  expect(intern.school).toBe('UCLA');
});

test("getRole() should return \"Intern\"", () => {
  expect(intern.getRole()).toBe('Intern');
});

test("Can get school via getSchool()", () => {
  expect(intern.getSchool()).toBe('UCLA');
});