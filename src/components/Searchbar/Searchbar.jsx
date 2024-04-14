import { normalizeQuery } from 'helpers/normalizeQuery';
import { Component } from 'react';
import {
  StyledHeader,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledSpan,
} from './Searchbar.styled';

const INITIAL_STATE = { query: '' };
export default class Searchbar extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    const normalizedQuery = normalizeQuery(this.state.query);
    this.props.cbOnSubmit(normalizedQuery);
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <StyledHeader>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledButton type="submit" className="button">
            <StyledSpan>Search</StyledSpan>
          </StyledButton>

          <StyledInput
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}
