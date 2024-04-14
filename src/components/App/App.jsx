import Searchbar from 'components/Searchbar';
import { Component } from 'react';
import { StyledApp } from './App.styled';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    isModalOpen: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isLoading) this.setState({ isLoading: true });

    try {
      console.log('fetch data');
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleSubmit = query => {
    if (query !== this.state.searchQuery) {
      this.setState({ searchQuery: query });
    }
  };

  render() {
    return (
      <StyledApp>
        <Searchbar cbOnSubmit={this.handleSubmit} />
      </StyledApp>
    );
  }
}
