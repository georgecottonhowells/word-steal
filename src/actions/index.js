import axios from "axios";

//async
export const fetchPoems = (author) => {
  return async (dispatch) => {
    const url = "https://poetrydb.org/author/" + author;
    const response = await axios.get(url);
    const poems = response.data;
    dispatch({
      type: "FETCH_POEMS",
      payload: poems,
    });
  };
};

export const selectedSource = (source) => {
  return { type: "SELECTED_SOURCE", payload: source };
};

export const selectedTextToSteal = (text) => {
  return { type: "SELECTED_TEXT_TO_STEAL", payload: text };
};

export const fetchWordDictionaryInformation = (word) => {
  console.log({ word });
  return async (dispatch) => {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    const response = await axios.get(url);
    dispatch({ type: "FETCH_WORD_DICTIONARY_INFORMATION", payload: response });
  };
};

//ssync
export const fetchAuthors = () => {
  return async (dispatch) => {
    const response = await axios.get("https://poetrydb.org/author");
    const authors = response.data.authors;
    dispatch({ type: "FETCH_AUTHORS", payload: authors });
  };
};

export const selectedAuthor = (author) => {
  return { type: "SELECTED_AUTHOR", payload: author };
};

export const selectedPoem = (poem) => {
  return { type: "SELECTED_POEM", payload: poem };
};

export const stoleLine = (line) => {
  return { type: "STOLE_LINE", payload: line };
};

export const removedLine = (line) => {
  return { type: "REMOVED_LINE", payload: line };
};

export const draggedElement = (id) => {
  return { type: "DRAGGED_ELEMENT", payload: id };
};

export const swappedLine = (first, second) => {
  return { type: "SWAPPED_LINE", payload: { first, second } };
};

export const madeInputVisible = (value) => {
  return { type: "MADE_INPUT_VISIBLE", payload: value };
};

export const inputtedCustomText = (text) => {
  return { type: "INPUTTED_CUSTOM_TEXT", payload: text };
};

export const addedCustomLine = (line) => {
  return { type: "ADDED_CUSTOM_LINE", payload: line };
};

export const hoveredOverLine = (line) => {
  return { type: "HOVERED_OVER_LINE", payload: line };
};

export const deselectedSource = (source) => {
  return { type: "DESELECTED_SOURCE", payload: source };
};

export const inputDictionaryWordText = (text) => {
  return { type: "INPUT_DICTIONARY_WORD_TEXT", payload: text };
};
