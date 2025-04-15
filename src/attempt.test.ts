import { describe, test, expect } from "vitest";

import { attempt } from "./attempt";

describe("attempt", () => {
  test("should return the result of the operation", async () => {
    const operation = async () => 42;
    const [error, result] = await attempt(operation);

    expect(error).toBeNull();
    expect(result).toEqual(42);
  });

  test("should return an error if the operation throws", async () => {
    const operation = async () => {
      throw new Error("Test error");
    };
    const [error, result] = await attempt(operation);

    expect(error).toBeInstanceOf(Error);
    expect(result).toBeNull();
  });

  test("should return an error if the operation returns a rejected promise", async () => {
    const operation = () => Promise.reject(new Error("Test error"));
    const [error, result] = await attempt(operation);

    expect(error).toBeInstanceOf(Error);
    expect(result).toBeNull();
  });
});
