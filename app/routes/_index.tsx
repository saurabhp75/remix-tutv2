import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "RemixV2 tutorial" },
    { name: "description", content: "Sample RemixV2 application" },
  ];
};

export default function Index() {
  return (
    <div >
      <h1 className="text-3xl text-zinc-500 font-extrabold">Hello from RemixV2</h1>
    </div>
  );
}
