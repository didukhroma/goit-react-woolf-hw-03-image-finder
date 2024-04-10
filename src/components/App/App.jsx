import { Component } from 'react';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    isModalOpen: false,
    isLoading: true,
  };

  render() {
    return <div>React homework template</div>;
  }
}
