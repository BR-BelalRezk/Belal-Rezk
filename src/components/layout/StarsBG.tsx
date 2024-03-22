import dynamic from "next/dynamic";

const Stars = dynamic(() => import("./Stars"), { ssr: false });
export default function StarsBG() {
  return (
    <section className="fixed h-dvh w-dvw -z-50">
      <Stars />
    </section>
  );
}
