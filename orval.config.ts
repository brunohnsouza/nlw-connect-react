import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'https://nlw-connect-api.onrender.com/docs/json',
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: 'https://nlw-connect-api.onrender.com',

      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})
