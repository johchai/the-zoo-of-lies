import { Hono } from "hono";

const app = new Hono();

const Introduction = () => {
  return (
    <>
      <h1>Welcome to the Zoo of Lies!</h1>
      <p>
        This is a simple client-side application that uses Hono and Vite SSR
        components.
      </p>
    </>
  );
};

export const routeClient = app.get("/", (c) => c.html(<Introduction />));
