import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    // if (e.which === 13) {
    e.preventDefault();
     this.props.onSubmit(this.state.term);
    //}
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              // onKeyPress = {this.onKeyPress}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
