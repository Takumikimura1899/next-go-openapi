/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/hello": {
    /** Returns a greeting message. */
    get: {
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["hello"];
          };
        };
      };
    };
  };
  "/goodbye": {
    /** Returns a goodbye message. */
    get: {
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["goodbye"];
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    hello: {
      /** @example Hello, world! */
      message?: string;
    };
    goodbye: {
      /** @example Goodbye, world! */
      message?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
