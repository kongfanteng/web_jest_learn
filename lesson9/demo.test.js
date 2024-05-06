import { generateConfig, generateAnotherConfig } from "./demo";

test("测试 generateConfig 函数", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      timer: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "host": 8080,
      "server": "http://localhost",
      "timer": Any<Date>,
    }
  `
  );
});
test("测试 generateAnotherConfig 函数", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      timer: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "host": 8080,
      "server": "http://localhost",
      "timer": Any<Date>,
    }
  `
  );
});
