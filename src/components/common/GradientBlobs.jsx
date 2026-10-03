export default function GradientBlobs({ variant = "light" }) {
  const palette =
    variant === "dark"
      ? ["bg-royal-500/30", "bg-royal-400/20", "bg-royal-700/30"]
      : ["bg-royal-200/60", "bg-royal-100/70", "bg-royal-300/40"];

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full ${palette[0]} blur-3xl animate-blob`}
      />
      <div
        className={`absolute top-1/3 -right-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full ${palette[1]} blur-3xl animate-blob`}
        style={{ animationDelay: "3s" }}
      />
      <div
        className={`absolute bottom-0 left-1/4 w-56 h-56 sm:w-72 sm:h-72 rounded-full ${palette[2]} blur-3xl animate-blob`}
        style={{ animationDelay: "6s" }}
      />
    </div>
  );
}
