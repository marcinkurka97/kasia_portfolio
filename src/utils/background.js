import styled from 'styled-components';
import tlo1 from '../images/zygzak.png';

const StyledBackground = styled.div`
  z-index: -1;
  background: url(${tlo1});
  background-size: contain;
  background-repeat: no-repeat;
  width: 85%;
  height: 40%;
  position: fixed;
  top: 35%;
  left: 15%;
`;

export default StyledBackground;
