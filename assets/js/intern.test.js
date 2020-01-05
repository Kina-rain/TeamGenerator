const intern = require("./intern");

test("can get the intern object", () => {
    const iPerson = new intern();
    expect(typeof(iPerson)).toBe("object");
});

test("can get the school of the intern", () => {
    const school = "Auburn";
    const iPerson = new intern("Walter", 123, "test@testing.com", school);
    expect(iPerson.school).toBe(school);
});

test("can get the role of the intern", () => {
    const iRole = "Intern";
    const iPerson = new intern();
    expect(iPerson.get_role()).toBe(iRole);
});