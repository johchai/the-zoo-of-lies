interface PanelProps {
  title: string;
  content: {
    title: string;
    json: Record<string, any>;
  }[];
}

export const Panel = (props: PanelProps) => {
  return (
    <section class="border-primary shadow-primary flex flex-col gap-6 border-2 bg-white p-6 shadow-[6px_6px_0px_0px]">
      <div class="flex flex-row items-center gap-3">
        <span class="size-4 rounded-full bg-[#FF5F57]" />
        <span class="size-4 rounded-full bg-[#FDBC2C]" />
        <span class="size-4 rounded-full bg-[#2BC840]" />
      </div>
      <div class="flex flex-col gap-6">
        {props.content.map((item, index) => (
          <div key={index} class="flex flex-col gap-3">
            <h3 class="text-primary text-xl font-semibold">{item.title}</h3>
            <pre class="bg-highlight text-primary border-primary overflow-x-auto border-2 p-3 text-base md:p-6 md:text-lg">
              <code>{JSON.stringify(item.json, null, 2)}</code>
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
};
