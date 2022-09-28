import React, { Component } from "react";
import { selectedSource, deselectedSource } from "../actions";
import { connect } from "react-redux";
import "../styles.css";

const sources = ["Poetry", "Dictionary"];

class SourceSelector extends Component {
  renderDropdown() {
    const options = this.props.sources.map((item) => {
      return <option value={item}>{item}</option>;
    });
    return options;
  }

  render() {
    return (
      <select
        className="dropdown"
        onChange={(e) => {
          this.props.selectedSource(e.target.value);
        }}
      >
        <option selected disabled>
          Select a source
        </option>
        {this.renderDropdown()}
      </select>
    );
  }
}

const mapStateToProps = (state) => {
  return { sources: state.sources };
};

export default connect(mapStateToProps, {
  selectedSource,
  deselectedSource,
})(SourceSelector);
