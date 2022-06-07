const axios = require("axios");
const userService = require("./userService");

test("findOne returns what axios get returns", async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: {
      id: 1,
      name: "Green",
    },
  });
  const user = await userService.findOne(1);
  expect(user).toHaveProperty("id", 1);
  expect(user).toHaveProperty("name", "Green");
});
