// #############################################################################
// # Types
// #############################################################################

type TitleProps = {
  description: string[];
};

// #############################################################################
// # Components
// #############################################################################

export default function Description({ description }: TitleProps) {
  return (
    <div className="flex flex-col gap-2">
      {description.map((paragraph, index) => (
        <p key={index} className="text-text-dark">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
