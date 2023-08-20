import React from "react";
import Link from "next/link";

import Paragraph from "@/atoms/Paragraph";
import Section from "@/atoms/Section";

const AboutMyselfSection = () => (
  <Section title="About Myself 🤘">
    <Paragraph weight="light">
      <strong className="font-semibold">I'm a curious mind 🤓</strong>
      with a passion for numbers and coding 💾. Armed with a mathematics background 📐, 
      I've been on a coding journey for life. When I'm not crafting code, I'm lost in 
      the world of Ancient Greece 🇬🇷 and reading the classics. Join me as I explore the 
      crossroads of geometry, creativity, and history! 🌐🏛️
    </Paragraph>
  </Section>
);

export default AboutMyselfSection;
