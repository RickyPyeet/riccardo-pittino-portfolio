/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_ANALYTICS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
