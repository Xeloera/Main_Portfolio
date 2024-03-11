import React from 'react';
import { DiPython, DiReact, DiNodejs, DiHtml5, DiCss3, DiJavascript1, DiAws, DiDocker } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

// Import the Technologies array
import { Technologies as techData } from '../../constants/constants'; // Assuming the file is named TechnologiesData.js

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      {/* Map through the techData array and render each item */}
      {techData.map((tech, index) => (
        <ListItem key={index}>
          <tech.icon size="3rem" />
          <ListContainer>
            <ListTitle>{tech.name}</ListTitle>
            <ListParagraph>
              {tech.description}
              {tech.modLibs && (
                <>
                  <br />
                  {tech.modLibs}
                </>
              )}
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
