import styled from 'styled-components';
import { purpleTealGradient, hoverGradient } from '../../styles/GlobalComponents/gradients'; 

export const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;


export const GridContainer = styled.section`
  display: flex; /* Change to flex layout */
  flex-direction: column; /* Display items in a single column */
  padding: 3rem;
  row-gap: 3rem; /* Use row-gap for spacing between items */
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
    padding-bottom: 1;
  }
`;

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  border-radius: 40rem;
  box-shadow: 0 0 10rem rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;
`;



export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 3px;
  color: #fffff;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '4rem' : '3rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: ${purpleTealGradient}; 
`;



export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  display: flex;
  flex-direction: column;
  font-size: 1.75rem;
  line-height: 40px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.34s ease; /* I keep the shorter transition here */
  border-radius: 50px; /* Half of the height to create a capsule shape */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Adjust values for desired shadow */
  position: relative; /* Absolutely necessary */
  top: 0; /* Initial vertical position */
  padding: 0.5rem; /* Adjust padding to cover the full shape */

  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
    top: -1rem;
    ${purpleTealGradient}; 
    transform: scale(1.1);
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  padding: 1rem;
  font-size:2rem;
  
`;

export const CardInfo = styled.p`
  color: #e4e6e7;
  font-size: 1.2rem;
  line-height: 24px;
  text-align: center;
  padding: 2rem;
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 2rem;
  
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 50px; /* Half of the height to create a capsule shape */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Adjust values for desired shadow */
  
  &:hover {
    color: #fff;
    opacity: 1;
    top: -1rem;
    ${purpleTealGradient}; 
    transform: scale(1.1);
  }
`;
