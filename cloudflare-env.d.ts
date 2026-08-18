declare module "cloudflare:workers" {
  export const env: {
    DB?: unknown;
  };
}

type Fetcher = {
  fetch(request: Request): Promise<Response>;
};

type D1Database = unknown;
