import { Fact } from "@app/islands";
import { Button } from "./button";

interface Hero {
  API_URL: string;
}

export const Hero = ({ API_URL }: Hero) => {
  return (
    <section class="border-primary flex w-full flex-col items-center gap-12 border-b-2 px-12 py-24">
      <div class="mx-auto max-w-3xl">
        <div class="mx-auto flex w-full flex-col gap-6">
          <h1 class="text-primary text-center text-6xl leading-tight font-extrabold">
            Randomly Wrong Animal Facts API
          </h1>
          <p class="text-primary text-center text-2xl font-normal">
            Get absurd animal facts in JSON. Perfect for demos, hackathons, or
            when you need a laugh.
          </p>
        </div>
      </div>
      <Fact API_URL={API_URL} />
      <Button
        label="View on Github"
        href="https://github.com/johchai/the-zoo-of-lies"
        icon={{
          left: "./icons/github.svg",
          right: "./icons/arrow-right.svg"
        }}
      />
      <img
        class="absolute right-0"
        src="./bewildered-giraffe-the-zoo-of-lies.png"
        width="273"
        height="411"
        alt="Bewildered Giraffe"
      />
    </section>
  );
};
