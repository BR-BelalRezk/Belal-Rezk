export default function Stars() {
  return (
    <section className="fixed h-dvh w-dvw">
      {Array.from({ length: 3 }, (_, index) => index).map((index) => (
        <div
          key={index}
          id={index === 0 ? "stars1" : index === 1 ? "stars2" : "stars3"}
          className={`bg-transparent rounded-full ${
            index === 0
              ? "w-[1px] h-[1px]"
              : index === 1
              ? "w-0.5 h-0.5"
              : "w-[3px] h-[3px]"
          }`}
        />
      ))}
    </section>
  );
}
