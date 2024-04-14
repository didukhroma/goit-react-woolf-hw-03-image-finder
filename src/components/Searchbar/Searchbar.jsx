import { normalizeQuery } from 'helpers/normalizeQuery';
import { Component } from 'react';
import {
  StyledHeader,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledSpan,
} from './Searchbar.styled';

// import IconSVG from '../../icons/search.svg';
// console.log(ICON);

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
          <StyledButton type="submit">
            <StyledSpan>Search</StyledSpan>
            <span>
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="-8 -8 48 48"
              >
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
            </span>
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
