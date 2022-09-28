import MyPoem from "./MyPoem";
import TextToSteal from "./TextToSteal";

import PoetrySelector from "./PoetrySelector";
import SourceSelector from "./SourceSelector";
import DictionarySelector from "./DictionarySelector";
import React, { Component } from "react";
import { fetchAuthors } from "../actions";
import { connect } from "react-redux";

class Compose extends Component {
  renderSourceComponent() {
    if (this.props.selectedSource == "Poetry") {
      return <PoetrySelector />;
    } else if (this.props.selectedSource == "Dictionary") {
      return <DictionarySelector />;
    } else return null;
  }
  render() {
    return (
      <div className="compose-window">
        <div className="compose-window__column">
          <SourceSelector />
          {this.renderSourceComponent()}
        </div>

        <div className="compose-window__column">
          <TextToSteal />
        </div>
        <div className="compose-window__column">
          <MyPoem />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { authors: state.authors, selectedSource: state.selectedSource };
};

export default connect(mapStateToProps, { fetchAuthors })(Compose);
