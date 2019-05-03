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
      ingleItemThumbnail: null,
      page: 1,
      chunksPerPage: 6,
      allLoaded: false,
    };
  }

  renderPosts = item => {
    let edges = item;
    let { page, chunksPerPage } = this.state;
    let paginated = Array.from(edges).splice(0, page * chunksPerPage);

    return paginated.map(work => (
      <SingleWork
        key={work.id}
        singleId={work.id}
        work={work}
        workses={edges}
        openModal={this.openModal}
      />
    ));
  };

  onLoad = item => {
    let { page, chunksPerPage } = this.state;
    let edges = item;
    let allLoaded = (page + 5) * chunksPerPage >= edges.length;
    this.setState({ page: page + 5, allLoaded: allLoaded });
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
    let { allLoaded, chunksPerPage } = this.state;
    return (
      <>
        <StaticQuery
          query={graphql`
          query {
            portfolio {
              workses(where: {
                  type: Illustrations
                }) {
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
              <div className="works-container">
                <div className="works-table">{this.renderPosts(workses)}</div>
              </div>
              {workses.length >= chunksPerPage * 2 + 1 && (
                <div className={allLoaded ? 'load-disabled' : 'load'}>
                  <button onClick={work => this.onLoad(workses)}>
                    Show all
                  </button>
                </div>
              )}
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
              className="modal-image"
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
    className="work-link"
    onClick={work => openModal(workses.find(item => item.id === singleId))}
  >
    <div
      className="work-image"
      style={{
        backgroundImage: `url(${`https://media.graphcms.com/${
          work.thumbnail.handle
        }`})`,
      }}
    />
    <div className="work-caption">
      <p className="work-title">{work.name}</p>
      <p className="work-year">{work.date.substring(0, 10)}</p>
    </div>
  </button>
);

export default illustrationsWorks;
