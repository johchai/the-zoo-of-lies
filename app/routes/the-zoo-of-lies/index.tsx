import { Container, Footer, Hero, Panel } from "@app/components";
import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <main class="flex flex-col items-center justify-center">
      <title>The Zoo of Lies</title>
      <Hero API_URL={c.env.API_URL} />
      <Container title="Endpoints">
        <Panel
          title="API Endpoints"
          content={[
            {
              title: "Retrieve a single random fact",
              json: {
                method: "GET",
                path: "https://example.com/api/quotes/random",
                description: "Returns a random fact."
              }
            },
            {
              title: "Retrieve an amount of fact(s)",
              json: {
                method: "GET",
                path: "https://example.com/api/quotes/random?count=3",
                description: "Returns a list of 3 random facts."
              }
            },
            {
              title: "Retrieve a specific fact by ID",
              json: {
                method: "GET",
                path: "https://example.com/api/quotes?id=1",
                description: "Returns a specific fact."
              }
            }
          ]}
        />
        <Panel
          title="API Endpoints"
          content={[
            {
              title: "Example of JSON return",
              json: {
                quotes: [
                  {
                    id: "30",
                    quote:
                      "Hummingbirds are actually tiny helicopters operated by even tinier pilots"
                  }
                ],
                count: 1
              }
            }
          ]}
        />
      </Container>
      <Container title="Motivation">
        <p class="text-primary text-center text-lg">
          This project is hosted on Cloudflare Workers, with KV as the database,
          because why not make nonsense fast at the edge? Actually, this is just
          me testing out Hono with React and Cloudflare Workers, playing with
          their “cool edge whatever that is.” If you get a laugh (or at least a
          raised eyebrow), mission accomplished.
        </p>
      </Container>
      <Footer />
    </main>
  );
});
