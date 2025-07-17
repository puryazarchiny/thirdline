// #############################################################################
// # Components
// #############################################################################

export default function Title() {
  return (
    <h3 className="relative">
      <span className="text-fluid-30-48">Story of us</span>

      <span className="bg-primary-500 absolute -top-2 left-0 h-1 w-[calc(var(--fluid-30-48)*2)] rounded-full" />
    </h3>
  );
}
