import { checkPassword } from "./PasswordChecker.js";
import { describe, test } from "node:test";
import * as assert from "node:assert";

describe("PasswordChecker", () => {
  const sut = checkPassword;

  test("should throw an error if the password is not a string", () => {
    assert.throws(() => sut(123), {
      message: "Password should be a string",
    });
  });

  test("should throw an error if the password is less than 8 characters long", () => {
    assert.throws(() => sut("abc"), {
      message: "Password should be at least 8 characters long",
    });
  });

  test("should throw an error if the password is more than 20 characters long", () => {
    assert.throws(() => sut("abcdefghijabcdefghijabcdefghij"), {
      message: "Password should be at most 20 characters long",
    });
  });
  test("should throw an error if the password does not contain at least one lowercase letter", () => {
    assert.throws(() => sut("ABC123!@#"), {
      message: "Password should contain at least one lowercase letter",
    });
  });
  test("should throw an error if the password does not contain at least one uppercase letter", () => {
    assert.throws(() => sut("abc123!@#"), {
      message: "Password should contain at least one uppercase letter",
    });
  });
  test("should throw an error if the password does not contain at least one digit", () => {
    assert.throws(() => sut("abcABC!@#"), {
      message: "Password should contain at least one digit",
    });
  });
  test("throws an error if the password contains the ! character", () => {
    assert.throws(() => sut("abcABC123!"), {
      message: "Password should contain at least one special character but not an !",
    });
  });
  test("should throw an error if the password does not contain at least one special character", () => {
    assert.throws(() => sut("abcABC123"), {
      message: "Password should contain at least one special character",
    });
  });

});
