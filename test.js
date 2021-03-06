function getUser(id) {
  if (id <= 0) throw new Error("Invalid user ID");
  return {
    id,
    email: `user${id}@test.com`,
  };
}

test("1 is 1", () => {
  expect(1).toBe(1);
});

test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});

test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});

test("array", () => {
  const colors = ["Red", "Green", "Blue"];
  expect(colors).toHaveLength(3);
  expect(colors).toContain("Green");
  expect(colors).not.toContain("Yellow");
});

test.only("throw when id is non negative", () => {
  expect(() => getUser(-1)).toThrow();
  expect(() => getUser(-1)).toThrow("Invalid user ID");
});
