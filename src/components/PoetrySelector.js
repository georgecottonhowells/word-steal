import React, { Component } from "react";
import {
  fetchAuthors,
  fetchPoems,
  selectedAuthor,
  selectedPoem,
  selectedTextToSteal,
} from "../actions";
import { connect } from "react-redux";
import "../styles.css";

class PoetrySelector extends Component {
  componentDidMount() {
    this.props.fetchAuthors();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.textToSteal !== this.props.author) {
  //     this.props.fetchPoems(nextProps.author);
  //   }
  // }

  renderAuthorsList() {
    return (
      <select
        className="dropdown"
        onChange={(e) => {
          this.props.selectedAuthor(e.target.value);

          // this.props.fetchPoems(e.target.value);
          this.props.fetchPoems(this.props.selectedAuthor);
        }}
      >
        <option selected disabled>
          Select a source
        </option>
        {this.props.authors.map((author) => {
          return <option value={author}>{author}</option>;
        })}
      </select>
    );
  }

  renderPoemsList() {
    if (this.props.poems.length > 0) {
      let poemsList = this.props.poems.map((poem) => {
        return <option>{poem.title}</option>;
      });
      return (
        <select
          className="dropdown"
          onChange={(e) => {
            const poem = this.props.poems.find(
              (poem) => poem.title == e.target.value
            );

            this.props.selectedPoem(poem);
            this.props.selectedTextToSteal({
              lines: poem.lines,
              source: poem.title.concat(" - ", poem.author),
            });
          }}
        >
          <option selected disabled>
            Select a source
          </option>
          {poemsList}
        </select>
      );
    } else return null;
  }

  render() {
    return (
      <div>
        {this.renderAuthorsList()}
        {this.renderPoemsList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //check name of state in reducers
  return {
    authors: state.authors,
    author: state.author,
    poems: state.poems,
  };
};

export default connect(mapStateToProps, {
  fetchAuthors,
  fetchPoems,
  selectedAuthor,
  selectedPoem,
  selectedTextToSteal,
})(PoetrySelector);
