import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Modal from 'react-modal';

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
    let paginated = Array.from(edges).splice(0,item.length);

    return paginated.filter(item => item.subject === subject).map(work => (
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
                workses(where: {type: School}) {
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
            <div>
              <div className="schoolWork-container">
              
                <div className="schoolWork-header">
                  <h1 className="schoolWork-title">Posters</h1>
                  <p className="schoolWork-desc">Some Posters</p>
                </div>
                <div className="schoolWork-table">
                  {this.renderPosts(workses, "Posters")}
                </div>

                <div className="schoolWork-header">
                  <h1 className="schoolWork-title">Infographics</h1>
                  <p className="schoolWork-desc">Infogapics about selected topic. Here's one about elephant huntings and second about Solar system.</p>
                </div>
                <div className="schoolWork-table">
                  {this.renderPosts(workses, "Infographic")}
                </div>

                <div className="schoolWork-header">
                  <h1 className="schoolWork-title">Leaflet project</h1>
                  <p className="schoolWork-desc">Leaflet project about fictional person with our own design idea. Inspired by Piet Mondrian's works, suprematism and constructivism.</p>
                </div>
                <div className="schoolWork-table">
                  {this.renderPosts(workses, "Leaflet")}
                </div>
              </div>
            </div>
          )}
        />

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="modal-container">
            <div
              className="school-work-modal-image"
              style={{
                backgroundImage: `url(${`https://media.graphcms.com/${
                  this.state.singleItemImage
                }`})`,
              }}
            />
          </div>
        </Modal>
      </>
    );
  }
}
const SingleWork = ({ singleId, work, openModal, workses }) => (
  <button
    className="schoolWork-link"
    onClick={work => openModal(workses.find(item => item.id === singleId))}
  >
    <div
      className="schoolWork-image"
      style={{
        backgroundImage: `url(${`https://media.graphcms.com/${
          work.image.handle
        }`})`,
      }}
    />
  </button>
);

export default illustrationsWorks;
