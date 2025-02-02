import { test, expect, vi, afterAll } from "vitest";
import { logPipe } from "./debugUtils";

test('logPipe logging and passing through data correctly', () => {
  const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => {});

  afterAll(() => {
    consoleMock.mockReset();
  });

  // Test with label and different data types
  const numberResult = logPipe("number")(42);
  expect(consoleMock).toBeCalledWith("number", 42);
  expect(numberResult).toBe(42);

  const stringResult = logPipe("string")("test");
  expect(consoleMock).toBeCalledWith("string", "test");
  expect(stringResult).toBe("test");

  // Test with objects
  const obj = { foo: "bar" };
  const objectResult = logPipe("object")(obj);
  expect(consoleMock).toBeCalledWith("object", obj);
  expect(objectResult).toEqual(obj);

  // Test with arrays
  const arr = [1, 2, 3];
  const arrayResult = logPipe("array")(arr);
  expect(consoleMock).toBeCalledWith("array", arr);
  expect(arrayResult).toEqual(arr);

  // Test without label
  const noLabelResult = logPipe()(true);
  expect(consoleMock).toBeCalledWith("logPipe", true);
  expect(noLabelResult).toBe(true);

  expect(consoleMock).toBeCalledTimes(5);
});