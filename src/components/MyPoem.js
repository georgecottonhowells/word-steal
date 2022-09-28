import React, { Component } from "react";
import { connect } from "react-redux";

import {
  removedLine,
  draggedElement,
  swappedLine,
  madeInputVisible,
  inputtedCustomText,
  addedCustomLine,
  hoveredOverLine,
} from "../actions";

class MyPoem extends Component {
  handleDrop = (e) => {
    //get id of line element dragged
    const dragIndex = this.props.myPoem.findIndex((line) => {
      return line.id === +this.props.dragId;
    });

    //get id of line element dropped
    const dropIndex = this.props.myPoem.findIndex((line) => {
      return line.id === +e.currentTarget.id;
    });

    //dragLine is undefined

    //switch orders or reconstruct array
    this.props.swappedLine(dragIndex, dropIndex);
  };

  handleDrag = (e) => {
    this.props.draggedElement(e.currentTarget.id);
  };

  handleClick = (e) => {
    switch (e.detail) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        return;
    }
  };

  renderMyPoem() {
    const myPoem = this.props.myPoem.map((line, index) => {
      let visible = false;
      if (line.id == this.props.hoveredLine.id) {
        visible = true;
      }

      return (
        <div
          style={{
            marginBottom: "15px",
            width: "90%",
          }}
          draggable
          index={index}
          id={line.id}
          onMouseOver={() => {
            this.props.hoveredOverLine(line);
          }}
          onMouseLeave={() => {
            this.props.hoveredOverLine("");
          }}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={this.handleDrag}
          onDrop={this.handleDrop}
          key={index}
          onClick={(e) => {
            if (e.detail == 2) {
              return this.props.removedLine(line);
            }
          }}
        >
          <div>
            <div>{line.line}</div>
            <div style={{ display: visible ? "block" : "none" }}>
              {line.author} {line.title ? "-" : ""} {line.title}
            </div>
          </div>
        </div>
      );
    });

    return myPoem;
  }

  renderInput() {
    if (this.props.inputVisibility == true) {
      return (
        <div>
          <textarea
            placeholder="Add your own line"
            type="text"
            onInput={(e) => {
              this.props.inputtedCustomText(e.target.value);
            }}
            value={this.props.customText}
          ></textarea>
          <button
            content="Submit"
            onClick={() => {
              this.props.addedCustomLine(this.props.customText);
              this.props.inputtedCustomText("");
              this.props.madeInputVisible(false);
            }}
          >
            Submit
          </button>
          <button
            onClick={() => {
              this.props.madeInputVisible(false);
            }}
          >
            Hide
          </button>
        </div>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.props.madeInputVisible(true);
          }}
        >
          Add Line
        </button>
      );
    }
  }

  render() {
    return (
      <div className="poem-window">
        <div>{this.renderMyPoem()}</div>

        <div>{this.renderInput()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myPoem: state.myPoem,
    dragId: state.dragId,
    inputVisibility: state.inputVisibility,
    customText: state.customText,
    hoveredLine: state.hoveredLine,
  };
};

export default connect(mapStateToProps, {
  removedLine,
  draggedElement,
  swappedLine,
  madeInputVisible,
  inputtedCustomText,
  addedCustomLine,
  hoveredOverLine,
})(MyPoem);

//check value of props
