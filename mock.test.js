const mockFn = jest.fn();
mockFn.mockReturnValue("I am a mock!");

test("mockFn test", () => {
  mockFn("a");
  mockFn(["b", "c"]);

  expect(mockFn).toBeCalledTimes(2);
  expect(mockFn).toBeCalledWith("a");
  expect(mockFn).toBeCalledWith(["b", "c"]);
});

const calculator = {
  add: (a, b) => a + b,
};

test("spyFn test", () => {
  const spyFn = jest.spyOn(calculator, "add");
  const result = calculator.add(2, 3);

  expect(spyFn).toBeCalledTimes(1);
  expect(spyFn).toBeCalledWith(2, 3);
  expect(result).toBe(5);
});
