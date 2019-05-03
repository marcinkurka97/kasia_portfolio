import React from 'react';
import Media from 'react-media'
import { StaticQuery, graphql } from 'gatsby';
import Modal from 'react-modal';

class threeDWorks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      singleItemId: null,
      singleItemName: null,
      singleItemDate: null,
      singleItemImage: null,
      //singleItemThumbnail: null,
    };
  }

  componentDidMount() {
    const itemsNumber = document.getElementById("threeD-container").childNodes.length;
    const height = (Math.ceil(itemsNumber / 4) * 300) + 50;
    const mobileHeight = itemsNumber * 300;
    const width = window.innerWidth

    if(width >= 768) {
      document.getElementById("threeD-container").style.height = `${height}px`
    } else {
      document.getElementById("threeD-container").style.height = `${mobileHeight}px`
    }
  }


  renderPosts = item => {
    let edges = item;
    let paginated = Array.from(edges).splice(0, item.length);
    let workCounter = 0;
    let allCounter = 0;
    let margin = 0;
    let marginMobile = 0;

    return paginated.map((work) => (
      // eslint-disable-next-line
      (workCounter >= 8 ? workCounter = 0 : workCounter),
      (allCounter!==0 && allCounter%4===0 ? margin += 320 : margin),
      (allCounter!==0 && allCounter%1===0 ? marginMobile += 300 : marginMobile),
      (workCounter++),
      (allCounter++),
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
              workses(where: {
                  type: ThreeD
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
              <h1 className="threeD-title">3D</h1>
              <p className="threeD-subtitle">3d Models. Concept Art. ETC.</p>
              <div id="threeD-container" className="threeD-container">{this.renderPosts(workses)}</div>
              <div className="threeD-link-box">
                <a className="threeD-link" href="https://www.artstation.com/cattleeia">Visit my ArtStation profile!</a>
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
const SingleWork = ({ singleId, work, openModal, workses, workCounter, margin, marginMobile }) => (

  <Media query={{ maxWidth: 768 }}>
    {matches =>
      matches ? (
        <button
        className={`threeD-outer-image threeD-outer-image-${workCounter}`}
        onClick={work => openModal(workses.find(item => item.id === singleId))}
        style={{marginTop: `${marginMobile}px`}}
      >
        <div
          className="threeD-image"
          style={{
            backgroundImage: `url(${`https://media.graphcms.com/${
              work.image.handle
            }`})`,
          }}
        />
      </button>
      ) : (
        <button
        className={`threeD-outer-image threeD-outer-image-${workCounter}`}
        onClick={work => openModal(workses.find(item => item.id === singleId))}
        style={{marginTop: `${margin}px`}}
      >
        <div
          className="threeD-image"
          style={{
            backgroundImage: `url(${`https://media.graphcms.com/${
              work.image.handle
            }`})`,
          }}
        />
      </button>
      )
    }
  </Media>
);

export default threeDWorks
