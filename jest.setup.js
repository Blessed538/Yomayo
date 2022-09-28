// jest.setup.ts
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());
