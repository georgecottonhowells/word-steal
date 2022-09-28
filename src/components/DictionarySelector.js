import React, { Component } from "react";
import {
  selectedTextToSteal,
  fetchWordDictionaryInformation,
  inputDictionaryWordText,
} from "../actions";
import { connect } from "react-redux";
import "../styles.css";

class DictionarySelector extends Component {
  componentDidUpdate() {
    if (this.props.wordDictionaryInformation) {
      const definition =
        this.props.wordDictionaryInformation.data[0].meanings[0].definitions[0]
          .definition;
      this.props.selectedTextToSteal({
        lines: [definition],
        source: "dictionary",
      });
    }
  }

  renderTextInput() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();

          this.props.fetchWordDictionaryInformation(
            this.props.dictionaryWordInput
          );

          //after calling a thunk action, redux does not wait for it to be completed to run next lines of code
        }}
      >
        <input
          type="text"
          value={this.props.dictionaryWordInput}
          onChange={(e) => {
            this.props.inputDictionaryWordText(e.target.value);
          }}
          name="name"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
  render() {
    return <div>{this.renderTextInput()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    dictionaryWordInput: state.dictionaryWordInput,
    wordDictionaryInformation: state.wordDictionaryInformation,
  };
};

export default connect(mapStateToProps, {
  fetchWordDictionaryInformation,
  inputDictionaryWordText,
  selectedTextToSteal,
})(DictionarySelector);
