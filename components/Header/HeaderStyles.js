import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import { purpleTealGradient, hoverGradient } from '../../styles/GlobalComponents/gradients'; 



export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  grid-template-rows: 1fr;             
  grid-column-gap: 3rem;   /* Increased gap */
  padding: 2rem;           /* More padding */
  padding-top: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Div1 = styled.div`

  grid-area: 1 / 1 / 2 / 2;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column; /* Stack title/icon vertically */
  align-items: flex-start; /* Consider if centered icon is desired */
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 5 / 3 / 6;
  display: flex;
  margin-right: 5rem;
  flex-direction: column; /* Stack title/icon vertically */
  justify-content: space-around;
  align-items: flex-end; /* Consider if centered icon is desired */
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 5 / 3 / 6;
    margin-right: 5%;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {

    grid-area: 1 / 5 / 2 / 6;
  }
`;

export const NavLink = styled.a`
  display: flex;  
  flex-direction: column;
  font-size: 2rem;
  line-height: 2rem; 
  color: rgba(255, 255, 255, 0.75);
  transition: 0.34s ease;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-right: 0.5rem;
  padding: 0.5rem;


  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
    // Remove left positioning on hover to avoid moving elements out of the viewport
    ${purpleTealGradient}; 
    transform: scale(1.1);
  }


`;
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none; 
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: all 0.3s ease; /* Transition on all applicable properties */
  

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff; 
    ${purpleTealGradient}; /* Apply the gradient on hover */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Subtle drop shadow */
    transform: scale(0.98); /* Subtle "click" effect */
  }

  @media ${(props) => props.theme.breakpoints.sm} {
     padding: 0.3rem 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
     padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: left;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
display: flex;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
  ${purpleTealGradient}; /* Apply the gradient on hover */
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`

