import styled from 'styled-components';
// import tlo1 from '../images/tlo1.png';
import tlo2 from '../images/tlo2.png';

export const StyledBackground = styled.div`
  z-index: -1;
  background: url(${tlo2});
  background-size: cover;
  background-repeat: no-repeat;
  width: 85%;
  height: 40%;
  position: fixed;
  top: 35%;
  left: 15%;
`;
