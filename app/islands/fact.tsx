import { Button } from "@app/components";
import { useState, useEffect } from "hono/jsx";

type ApiData = {
  facts: {
    id: number;
    fact: string;
  }[];
  count: number;
};

interface Fact {
  API_URL: string;
}

export const Fact = (props: Fact) => {
  const [data, setData] = useState<ApiData["facts"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    console.log("Fetch data");
    setLoading(true);
    setError(null);
    setData(null);

    try {
      // const res = await fetch("http://localhost:8787/the-zoo-of-lies/api");
      const res = await fetch(props.API_URL);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json: ApiData = await res.json();
      setData(json.facts);
    } catch (err: any) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  // Trigger once on mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="mx-auto w-full max-w-5xl">
      <div class="border-primary grid min-w-full grid-cols-[1fr_1fr_1fr_auto] place-content-between items-center gap-12 border-2 p-6">
        <div class="text-primary col-span-3 my-3 overflow-x-scroll text-lg font-semibold">
          {data && !loading && (
            <div>
              {data.map((fact) => (
                <h3 class="whitespace-nowrap" key={fact.id}>
                  {fact.fact}
                </h3>
              ))}
            </div>
          )}
          {error && <span class="text-error">Error: {error}</span>}
          {loading && <span class="text-primary">Loading...</span>}
        </div>
        <div class="col-span-1 flex-none -translate-1.5">
          <Button
            label="New fact"
            onClick={fetchData}
            icon={{
              right: "./icons/random.svg"
            }}
          />
        </div>
      </div>
    </div>
  );
};
