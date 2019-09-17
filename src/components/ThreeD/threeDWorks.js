import React from 'react';
import Media from 'react-media';
import styled from 'styled-components';
import media from '../..//utils/media';
import { StaticQuery, graphql } from 'gatsby';
import Modal from 'react-modal';
import {
  StyledWorkTitle,
  StyledWork3dContainer,
  StyledWork3dOuter,
  StyledWork3dImage,
} from '../Works/works';
import {
  StyledModal,
  StyledModalContainer,
  StyledModalImage,
} from '../Modal/modal';
import StyledBackground from '../../utils/background';

const BackgroundPhoto = styled(StyledBackground)`
  background-size: cover;
  position: absolute;
  background-repeat: repeat;
  top: 23%;
  left: 33%;
  height: 50%;
  width: 60%;

  ${media.tablet`
    top: 30%;
    left: 2.5%;
    height: 60%;
    width: 95%;
  `}
`;

class threeDWorks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      singleItemId: null,
      singleItemName: null,
      singleItemDate: null,
      singleItemImage: null,
      singleItemThumbnail: null,
    };
  }

  componentDidMount() {
    const itemsNumber = document.getElementById('threeD-container').childNodes
      .length;
    const height = Math.ceil(itemsNumber / 4) * 300 + 50;
    const mobileHeight = itemsNumber * 300;
    const width = window.innerWidth;
    if (width >= 768) {
      document.getElementById('threeD-container').style.height = `${height}px`;
    } else {
      document.getElementById(
        'threeD-container'
      ).style.height = `${mobileHeight}px`;
    }
  }

  renderPosts = item => {
    let edges = item;
    let paginated = Array.from(edges).splice(0, item.length);
    let workCounter = 0;
    let allCounter = 0;
    let margin = 0;
    let marginMobile = 0;

    return paginated.map(
      work => (
        // eslint-disable-next-line
        workCounter >= 8 ? (workCounter = 0) : workCounter,
        allCounter !== 0 && allCounter % 4 === 0 ? (margin += 320) : margin,
        allCounter !== 0 && allCounter % 1 === 0
          ? (marginMobile += 300)
          : marginMobile,
        workCounter++,
        allCounter++,
        (
          <SingleWork
            key={work.id}
            singleId={work.id}
            work={work}
            workses={edges}
            openModal={this.openModal}
            workCounter={workCounter}
            allCounter={allCounter}
            margin={margin}
            marginMobile={marginMobile}
          />
        )
      )
    );
  };

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal = item => {
    this.setState({
      modalIsOpen: true,
      singleItemId: item.id,
      singleItemName: item.name,
      singleItemDate: item.date,
      singleItemImage: item.image.handle,
      singleItemThumbnail: item.thumbnail.handle,
    });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <>
        <BackgroundPhoto />
        <StaticQuery
          query={graphql`
            query {
              portfolio {
                workses(where: { type: ThreeD }) {
                  id
                  name
                  type
                  date
                  thumbnail {
                    handle
                  }
                  image {
                    handle
                  }
                }
              }
            }
          `}
          render={({ portfolio: { workses } }) => (
            <div>
              <StyledWorkTitle>3D</StyledWorkTitle>
              <StyledWork3dContainer id="threeD-container">
                {this.renderPosts(workses)}
              </StyledWork3dContainer>
            </div>
          )}
        />

        <StyledModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <StyledModalContainer>
            <StyledModalImage
              style={{
                backgroundImage: `url(${`https://media.graphcms.com/${
                  this.state.singleItemImage
                }`})`,
              }}
            />
          </StyledModalContainer>
        </StyledModal>
      </>
    );
  }
}
const SingleWork = ({
  singleId,
  work,
  openModal,
  workses,
  workCounter,
  margin,
  marginMobile,
}) => (
  <Media query={{ maxWidth: 768 }}>
    {matches =>
      matches ? (
        <StyledWork3dOuter
          onClick={work =>
            openModal(workses.find(item => item.id === singleId))
          }
          style={{ marginTop: `${marginMobile}px` }}
        >
          <StyledWork3dImage
            style={{
              backgroundImage: `url(${`https://media.graphcms.com/${
                work.image.handle
              }`})`,
            }}
          />
        </StyledWork3dOuter>
      ) : (
        <StyledWork3dOuter
          onClick={work =>
            openModal(workses.find(item => item.id === singleId))
          }
          style={{ marginTop: `${margin}px` }}
        >
          <StyledWork3dImage
            style={{
              backgroundImage: `url(${`https://media.graphcms.com/${
                work.image.handle
              }`})`,
            }}
          />
        </StyledWork3dOuter>
      )
    }
  </Media>
);

export default threeDWorks;
