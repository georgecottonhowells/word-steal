import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPoems, stoleLine } from "../actions";

class TextToSteal extends Component {
  renderTextToSteal() {
    if (
      this.props.textToSteal &&
      Object.keys(this.props.textToSteal).length != 0
    ) {
      return this.props.textToSteal.lines.map((line, index) => {
        if (index < 10 && line != "") {
          return (
            <p
              onClick={(e) => {
                if (e.detail == 2) {
                  return this.props.stoleLine({
                    source: this.props.textToSteal.source,
                    line: line,
                  });
                }
              }}
              key={index}
            >
              {line}
            </p>
          );
        } else return null;
      });
    } else {
      return "";
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.textToSteal !== this.props.author) {
      this.props.fetchPoems(nextProps.author);
    }
  }

  render() {
    return (
      <div className="poem-window">{<div>{this.renderTextToSteal()}</div>}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    author: state.author,
    textToSteal: state.textToSteal,
  };
};

export default connect(mapStateToProps, {
  fetchPoems,
  stoleLine,
})(TextToSteal);
