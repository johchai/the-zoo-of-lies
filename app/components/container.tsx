import { JSX } from "hono/jsx";

interface ContainerProps {
  title: string;
  children: JSX.HTMLAttributes;
}

export const Container = ({ title, children }: ContainerProps) => {
  return (
    <section class="border-primary w-full border-b-2 px-12 py-24">
      <div class="mx-auto flex max-w-5xl flex-col gap-12">
        <h2 class="text-primary text-center text-4xl font-extrabold">
          {title}
        </h2>
        <div class="flex flex-col gap-12">{children}</div>
      </div>
    </section>
  );
};
