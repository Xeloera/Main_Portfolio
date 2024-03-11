"use client";
import { ThemeProvider } from 'styled-components';
import theme from '../themes/default'; // Adjust the path to your theme file
import GlobalStyles from '../styles/globals'; // Adjust the path to your GlobalStyles file
import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';






export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Layout>
          <Section>
            <Hero />
          </Section>
          <Projects />
          <Technologies />
          <Timeline />
          <Acomplishments />
        </Layout>
    </ThemeProvider>
  );
}

/*
        <div class='z-0'>
        <Section>
          <Hero />
        </Section>

*/