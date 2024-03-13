export default function Label_Input({
  name,
}: {
  name: "name" | "email" | "message";
}) {
  return (
    <div
      className={`flex items-center justify-center flex-col gap-3 sm:gap-5 ${
        name === "message" && "w-full"
      }`}
    >
      <label
        htmlFor={name}
        className="text-xl sm:text-3xl font-bold self-start text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"
      >
        {name
          .split("")
          .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
          .join("")}
      </label>
      {name === "message" ? (
        <textarea
          name={name}
          id={name}
          className="bg-transparent border-b-2 border-gray-500 w-full h-48 outline-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={name === "email" ? "email" : "text"}
          className="bg-transparent border-b-2 border-gray-500 w-full outline-none"
        />
      )}
    </div>
  );
}
