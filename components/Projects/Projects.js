import React from 'react';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Image from 'next/image';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <CardContainer key={i} className="inter-var">
            <CardBody className="bg-blacks-50 relative group/card dark:hover:shadow-4xl dark:hover:shadow-emerald-500/[0.20] dark:bg-white dark:border-black/[0.2] border-white/[0.2] w-full sm:w-[45rem] h-auto rounded-xl p-8 border">
              <CardItem translateZ="25" className="text-xxl font-bold text-neutral-200 dark:text-black">
                <HeaderThree>
                {p.title}
                </HeaderThree>
              </CardItem>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
              <Image
                src={p.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
              <UtilityList>
                <ExternalLinks href={p.visit}>Code</ExternalLinks>
                <ExternalLinks href={p.source}>Source</ExternalLinks>
              </UtilityList>
            </CardBody>
          </CardContainer>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
