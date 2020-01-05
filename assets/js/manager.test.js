const manager = require("./manager");

test("can get the manager object", () => {
    const iManager = new manager();
    expect(typeof(iManager)).toBe("object");
});

test("can get the office number of the manager", () => {
    const managerOffice = 452;
    const iManager = new manager("Walter", 123, "test@testing.com", managerOffice);
    expect(iManager.office_number).toBe(managerOffice);
});

test("can get role of the manager", () => {
    const managerRole = "Manager";
    const iManager = new manager();
    expect(iManager.get_role()).toBe(managerRole);
});