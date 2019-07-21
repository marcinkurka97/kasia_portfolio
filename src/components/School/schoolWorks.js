import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Modal from 'react-modal';
import styled from 'styled-components';
import {
  StyledWorkContainer,
  StyledWorkTitle,
  StyledWorkSubtitle,
  StyledWorkTable,
  StyledWorkSchool,
  StyledWorkSchoolImage,
} from '../Works/works';
import {
  StyledModal,
  StyledModalContainer,
  StyledModalImage,
} from '../Modal/modal';

const StyledWorkTableSchool = styled(StyledWorkTable)`
  grid-gap: 40px 40px;
`;

const StyledModalImageSchool = styled(StyledModalImage)`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  -webkit-box-shadow: 5px 5px 50px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 50px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 50px -20px rgba(0, 0, 0, 0.75);
`;

class illustrationsWorks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      singleItemId: null,
      singleItemName: null,
      singleItemDate: null,
      singleItemImage: null,
      // singleItemThumbnail: null,
      page: 1,
      chunksPerPage: 6,
      allLoaded: false,
    };
  }

  renderPosts = (item, subject) => {
    let edges = item;
    let paginated = Array.from(edges).splice(0, item.length);

    return paginated
      .filter(item => item.subject === subject)
      .map(work => (
        <SingleWork
          key={work.id}
          singleId={work.id}
          work={work}
          workses={edges}
          openModal={this.openModal}
        />
      ));
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
      // singleItemThumbnail: item.thumbnail.handle,
    });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <>
        <StaticQuery
          query={graphql`
            query {
              portfolio {
                workses(where: { type: School }) {
                  id
                  name
                  type
                  date
                  subject
                  image {
                    handle
                  }
                }
              }
            }
          `}
          render={({ portfolio: { workses } }) => (
            <>
              <StyledWorkTitle>Posters</StyledWorkTitle>
              <StyledWorkSubtitle>
                Some posters works made to school
              </StyledWorkSubtitle>
              <StyledWorkContainer>
                <StyledWorkTableSchool>
                  {this.renderPosts(workses, 'Posters')}
                </StyledWorkTableSchool>
              </StyledWorkContainer>

              <StyledWorkTitle>Infographics</StyledWorkTitle>
              <StyledWorkSubtitle>
                Infogapics about selected topic. Here's one about elephant
                huntings and second about Solar system.
              </StyledWorkSubtitle>
              <StyledWorkContainer>
                <StyledWorkTableSchool>
                  {this.renderPosts(workses, 'Infographic')}
                </StyledWorkTableSchool>
              </StyledWorkContainer>

              <StyledWorkTitle>Leaflet project</StyledWorkTitle>
              <StyledWorkSubtitle>
                Leaflet project about fictional person with our own design idea.
                Inspired by Piet Mondrian's works, suprematism and
                constructivism.
              </StyledWorkSubtitle>
              <StyledWorkContainer>
                <StyledWorkTableSchool>
                  {this.renderPosts(workses, 'Leaflet')}
                </StyledWorkTableSchool>
              </StyledWorkContainer>
            </>
          )}
        />

        <StyledModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <StyledModalContainer>
            <StyledModalImageSchool
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
const SingleWork = ({ singleId, work, openModal, workses }) => (
  <StyledWorkSchool
    onClick={work => openModal(workses.find(item => item.id === singleId))}
  >
    <StyledWorkSchoolImage
      style={{
        backgroundImage: `url(${`https://media.graphcms.com/${
          work.image.handle
        }`})`,
      }}
    />
  </StyledWorkSchool>
);

export default illustrationsWorks;
