import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['src/model/*.ts','/api/tsconfig.json'],

  },
})