import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Simulasikan browser untuk React
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transformasi TypeScript
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Alias untuk folder `src/`
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
