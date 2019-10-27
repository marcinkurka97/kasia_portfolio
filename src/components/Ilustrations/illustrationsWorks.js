import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Modal from 'react-modal';
import {
  StyledWorkContainer,
  StyledWorkTitle,
  StyledWorkTable,
  StyledWorkSingle,
  StyledWorkSingleImage,
  StyledWorkSingleCaption,
} from '../Works/works';
import {
  StyledModal,
  StyledModalContainer,
  StyledModalImage,
} from '../Modal/modal';

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
    let { page, chunksPerPage } = this.state;
    let paginated = Array.from(item).splice(0, page * chunksPerPage);
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let currentDay;
    let currentMonthName;
    let currentYear;
    let d;

    return paginated.map(
      work => (
        // eslint-disable-next-line
        (d = new Date(work.date.toString())),
        (currentDay = d.getDate()),
        (currentMonthName = monthNames[d.getMonth()]),
        (currentYear = d.getFullYear()),
        (
          <SingleWork
            key={work.id}
            singleId={work.id}
            work={work}
            workses={item}
            openModal={this.openModal}
            currentDay={currentDay}
            currentMonthName={currentMonthName}
            currentYear={currentYear}
          />
        )
      )
    );
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
                workses(where: { type: Illustrations }) {
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
            <>
              <StyledWorkTitle>Illustrations</StyledWorkTitle>
              <StyledWorkContainer>
                <StyledWorkTable>{this.renderPosts(workses)}</StyledWorkTable>
              </StyledWorkContainer>
              {workses.length >= chunksPerPage * 2 + 1 && (
                <div className={allLoaded ? 'load-disabled' : 'load'}>
                  <button onClick={work => this.onLoad(workses)}>
                    Show all
                  </button>
                </div>
              )}
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
  currentDay,
  currentMonthName,
  currentYear,
}) => (
  <StyledWorkSingle
    onClick={work => openModal(workses.find(item => item.id === singleId))}
  >
    <StyledWorkSingleImage
      style={{
        backgroundImage: `url(${`https://media.graphcms.com/${
          work.thumbnail.handle
        }`})`,
      }}
    />
    <StyledWorkSingleCaption>
      <p>{work.name}</p>
      <p>{currentDay + ' ' + currentMonthName + ' ' + currentYear}</p>
    </StyledWorkSingleCaption>
  </StyledWorkSingle>
);

export default illustrationsWorks;
