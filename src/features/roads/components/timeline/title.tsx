// #############################################################################
// # Types
// #############################################################################

type TitleProps = {
  number: string;
  title: string;
  subTitle: string;
};

// #############################################################################
// # Components
// #############################################################################

export default function Title({ number, title, subTitle }: TitleProps) {
  return (
    <hgroup className="flex flex-col items-start gap-2">
      {/* ################################ */}
      {/* # Number                         */}
      {/* ################################ */}

      <p className="text-primary-500 text-fluid-36-60 relative">
        <span>{number}</span>

        <span className="bg-primary-500 absolute -top-1 right-0 h-1 w-full rounded-full" />
      </p>

      {/* ################################ */}
      {/* # Title                          */}
      {/* ################################ */}

      <h3 className="text-fluid-20-30">{title}</h3>

      {/* ################################ */}
      {/* # Subtitle                       */}
      {/* ################################ */}

      <p className="text-text-darker text-lg">{subTitle}</p>
    </hgroup>
  );
}
