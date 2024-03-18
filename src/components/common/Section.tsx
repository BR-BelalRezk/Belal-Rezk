export default function Section({
  children,
  id,
}: {
  children: Readonly<React.ReactNode>;
  id:
    | "home"
    | "about"
    | "skills"
    | "certificates"
    | "work"
    | "fr"
    | "ar"
    | "contact";
}) {
  return (
    <section
      id={id}
      className={`snap-center container mx-auto px-3 sm:px-5 md:px-10 lg:px-14 xl:px-16 2xl:px-20 h-dvh flex items-center justify-center
      ${id === "fr" || id === "skills" ? "bg-black" : "bg-stone-950"}
      `}
    >
      {children}
    </section>
  );
}
