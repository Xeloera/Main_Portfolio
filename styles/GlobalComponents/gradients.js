import styled from 'styled-components';

export const hoverGradient = `
  background-image: linear-gradient(to right, ${props => props.theme.accent1}, ${props => props.theme.secondaryAccent}); 
  background-size: 200% auto;  
  background-position: center; 
  transition: background-position 1.5s ease-in-out;

  &:hover {
    background-position: left center;
    opacity: 0.9;
  }
`;

export const purpleTealGradient = `
  ${hoverGradient};  
  background-image: linear-gradient(to right, hsl(270, 80%, 50%), hsl(160, 90%, 40%)); 
`;

export const goldPinkGradient = `
  ${hoverGradient};  
  background-image: linear-gradient(to right, hsl(50, 80%, 70%), hsl(340, 80%, 65%)); 
`;

// Example styled component using box-shadow for shadow shape
export const CapsuleShapeWithShadow = styled.div`
  width: 200px;
  height: 100px;
  background-color: #fff;
  border-radius: 50px; /* Half of the height to create a capsule shape */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Adjust values for desired shadow */
`;
