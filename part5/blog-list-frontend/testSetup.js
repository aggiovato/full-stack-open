import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

const originalError = console.error;

console.error = (...args) => {
  if (/act/.test(args[0])) {
    return;
  }
  originalError(...args);
};
