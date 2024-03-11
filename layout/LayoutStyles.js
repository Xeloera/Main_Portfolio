import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  width: 120%;
  margin: auto;
  padding: 0 20px; /* Add some padding on smaller screens */

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
