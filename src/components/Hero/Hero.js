import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Mubashar Warriach's Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am currently a Software Engineering Student at Rochester Institute of
        Technology with a passion for learning and building new things. I am
        looking for an internship position as a software developer.
      </SectionText>
      <Button onClick={() => (window.location = "")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
