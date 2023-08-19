import React from "react";
import Link from "next/link";

import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";
import Section from "@/atoms/Section";

const IntroSection: React.VFC = () => (
  <Section>
    <Heading type="h1">Hello, I&apos;m David Lozano 👋</Heading>
    <Paragraph weight="light">
      Young full-stack engineer currently{" "}
      <Link href="https://www.feverup.com/">
        @ Fever
      </Link>.
    </Paragraph>
  </Section>
);

export default IntroSection;
