const employee = require("./employee");

test("Can create employee object", () => {
    const e = new employee();
    expect(typeof(e)).toBe("object");
});

test("Can get the email for the employee", () => {
    const email = "test@testing.com";
    const e = new employee("Walter", 1, email);
    expect(e.email).toBe(email);

});

test("can set the name of the employee", () => {
    const name = "Walter";
    const e = new employee(name);
    expect(e.name).toBe(name);
});

test("can set the id of an employee", () => {
    const empID = 234;
    const e = new employee("Walter", empID);
    expect(e.id).toBe(empID);
});

test ("can get the role for employee", () => {
    const empRole = "Employee";
    const e = new employee();
    expect(e.get_role()).toBe(empRole);
});