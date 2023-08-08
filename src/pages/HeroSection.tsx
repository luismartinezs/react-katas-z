import { PrimaryLinkButton } from "~/components/PrimaryLinkButton";
import { SectionWrapper } from "~/components/SectionWrapper";

export function HeroSection() {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center gap-4 md:gap-5 xl:gap-8">
      <h1 className="text-center text-4xl font-bold md:text-6xl xl:text-8xl">
        <span>
          Welcome to{" "}
          <span className="whitespace-nowrap text-primary-500">
            React Katas Z
          </span>
        </span>
        <br />
        <span>
          A repo to practice your{" "}
          <span className="whitespace-nowrap text-secondary-500">React-fu</span>
        </span>
      </h1>
      <p className="text-center text-xl md:text-3xl xl:text-4xl">
        Sint proident magna ut nulla sit elit ut. Id sunt esse et officia
        voluptate. Aute laborum aliquip reprehenderit sit excepteur.
      </p>
      <PrimaryLinkButton
        href="/katas"
        className="fancy-gradient bg-gradient-to-br px-5 py-3 font-semibold tracking-wide xl:text-2xl"
      >
        LOREM
      </PrimaryLinkButton>
    </SectionWrapper>
  );
}
