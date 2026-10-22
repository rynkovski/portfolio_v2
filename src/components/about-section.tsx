const LINK_CLASS =
  "underline underline-offset-[3px] decoration-foreground/30 hover:decoration-foreground transition-colors";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mt-6 flex flex-col gap-4 text-sm font-[460] leading-5 tracking-[-0.00563rem] text-foreground"
    >
      <p className="fade-up [--i:2]">
        I&apos;m a product-focused software developer who loves shipping things
        from zero to one.
      </p>
      <p className="fade-up [--i:3]">
        I&apos;ve built web and mobile products solo and with remote teams
        across time zones, from architecting mobile apps to co-creating an open
        source component library.
      </p>
      <p className="fade-up [--i:4]">
        When I&apos;m not pushing pixels, I&apos;m probably traveling somewhere
        on the other side of the globe, hanging out with my dog, or hunting for
        the perfect cup of coffee.
      </p>
      <p className="fade-up [--i:5]">
        You can find me on{" "}
        <a
          href="https://github.com/rynkovski"
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          GitHub
        </a>
        ,{" "}
        <a
          href="https://linkedin.com/in/karol-rynkowski"
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          LinkedIn
        </a>
        , or reach me via{" "}
        <a href="mailto:rynkowski.it@gmail.com" className={LINK_CLASS}>
          email
        </a>
        .
      </p>
      <p className="fade-up [--i:6]">
        Want to chat?{" "}
        <a
          href="https://cal.com/rynkovski"
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          Book a call
        </a>
        .
      </p>
    </section>
  );
}
