import { Container, Footer, Panel } from "@app/components";
// import { Hero } from "../../islands/hero";
import { Hero } from "@app/islands";
import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <main>
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
                path: "https://projects.johnnychai.my/the-zoo-of-lies/api",
                description: "Returns a random fact."
              }
            },
            {
              title: "Retrieve an amount of fact(s)",
              json: {
                method: "GET",
                path: "https://projects.johnnychai.my/the-zoo-of-lies/api?count=3",
                description: "Returns a list of 3 random facts."
              }
            },
            {
              title: "Retrieve a specific fact by ID",
              json: {
                method: "GET",
                path: "https://projects.johnnychai.my/the-zoo-of-lies/api/2",
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
        <p class="text-primary text-center text-base leading-normal md:text-lg md:leading-relaxed">
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
