"use client";
import React, { Suspense, lazy } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { TextGenerateEffect } from '../ui/text-generate-effect';
const words = "Fullstack, API, and ML,DL developer with a passion for data and the bigger picture. With a background in Computer Science, Psychology, Biochemistry, and Japanese.";


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Andrew。
        </SectionTitle>
        <SectionText>
          <TextGenerateEffect words={words} className=' dark:bg-slate-800 p-2'/>
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
