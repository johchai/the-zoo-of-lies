import { Button } from "@app/components";
import { Fact } from "@app/islands";

interface Hero {
  API_URL: string;
}

export const Hero = ({ API_URL }: Hero) => {
  return (
    <section class="border-primary flex w-full flex-col items-stretch gap-6 border-b-2 px-6 py-12 md:gap-12 md:px-12 md:py-24">
      <div class="mx-auto max-w-3xl pt-48 lg:pt-0">
        <div class="mx-auto flex w-full flex-col gap-3 md:gap-6">
          <h1 class="text-primary text-center text-4xl leading-tight font-extrabold md:text-6xl">
            Randomly Wrong Animal Facts API
          </h1>
          <p class="text-primary text-center text-xl font-medium md:text-2xl">
            Get absurd animal facts in JSON. Perfect for demos, hackathons, or
            when you need a laugh.
          </p>
        </div>
      </div>
      <Button
        className="mx-auto"
        label="View on Github"
        href="https://github.com/johchai/the-zoo-of-lies"
        icon={{
          left: "./icons/github.svg",
          right: "./icons/arrow-right.svg"
        }}
      />
      <Fact API_URL={API_URL} />
      <img
        class="pointer-events-none absolute -top-6 right-0 -rotate-[25deg] select-none md:rotate-0"
        src="./bewildered-giraffe-the-zoo-of-lies.png"
        width="273"
        height="411"
        alt="Bewildered Giraffe"
      />
    </section>
  );
};
