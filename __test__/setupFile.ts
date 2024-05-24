import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';

vi.stubEnv('BASE_URL', '/sub-path');

afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});