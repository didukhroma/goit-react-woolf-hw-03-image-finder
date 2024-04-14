import Searchbar from 'components/Searchbar';
import { Component } from 'react';
import { StyledApp } from './App.styled';
import getImagesAPI from 'utils/api/apiService';
import Loader from 'components/Loader';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import scroll from 'helpers/scroll';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    isModalOpen: false,
    isLoading: false,
    error: '',
    currentPage: 1,
    loadMore: false,
    modalPic: '',
    modalAltText: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }
    if (prevState.images.length !== 0) {
      scroll();
    }
  }

  getImages = async () => {
    const { searchQuery, currentPage } = this.state;
    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await getImagesAPI(searchQuery, currentPage);
      this.setState(prev => ({
        images: [...prev.images, ...hits],
        currentPage: prev.currentPage + 1,
        isLoading: false,
        loadMore: currentPage < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false, error: '' });
    }
  };

  handleSubmit = query => {
    if (!query.length) {
      alert('Please enter a more specific word ');
      return;
    }
    const { images, searchQuery } = this.state;
    if (query === searchQuery && images.length !== 0) {
      alert(
        'Please enter a more specific word or explore the button "Load more"'
      );
      return;
    }
    this.setState({
      searchQuery: query,
      images: [],
      error: '',
      currentPage: 1,
    });
  };

  handleClickLoadMore = () => this.getImages();

  toggleModal = (modalImg, text) => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
      modalPic: modalImg,
      modalAltText: text,
    }));
  };

  render() {
    const { isLoading, images, loadMore, isModalOpen } = this.state;
    return (
      <StyledApp>
        <Searchbar cbOnSubmit={this.handleSubmit} />
        <ImageGallery images={images} toggleModal={this.toggleModal} />
        {isLoading && <Loader />}
        {isModalOpen && (
          <Modal
            src={this.state.modalPic}
            alt={this.state.modalAltText}
            onClose={this.toggleModal}
          />
        )}
        {loadMore && <Button cbOnClick={this.handleClickLoadMore} />}
      </StyledApp>
    );
  }
}
