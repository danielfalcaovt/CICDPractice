/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */

const baseDir = "<rootDir>/src/app/";
const baseTestDir = "<rootDir>/src/test";

const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*test.ts`],
};

module.exports = config;
