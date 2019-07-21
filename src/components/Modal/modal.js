import styled from 'styled-components';
import Modal from 'react-modal';
import media from '../..//utils/media';

export const StyledModal = styled(Modal)`
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  border: none;
  background: none;
  overflow: hidden;
  border-radius: 0px;
  outline: none;
  padding: 0px;
  width: 1200px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.desktop`
    width: 90%;
  `}

  ${media.tablet`
    margin: 90px 0 0 0;
    width: 90%;
  `}
`;

export const StyledModalContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  text-align: center;
  width: 90%;
  height: 90%;
  overflow: hidden;
`;

export const StyledModalImage = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-box-shadow: 5px 5px 50px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 50px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 50px -20px rgba(0, 0, 0, 0.75);
  overflow: hidden;

  ${media.desktop`
    width: 100%;
  `}

  ${media.tablet`
    width: 100%;
    height: 100%;
  `}
`;
