import { combineReducers } from "redux";

const wordDictionaryInformationReducer = (state = null, action) => {
  if (action.type == "FETCH_WORD_DICTIONARY_INFORMATION") {
    return action.payload;
  } else if (action.type == "INPUT_DICTIONARY_WORD_TEXT") {
    return null;
  } else return state;
};

const authorsReducer = (state = [], action) => {
  if (action.type == "FETCH_AUTHORS") {
    return action.payload;
  } else return state;
};

const authorReducer = (state = [], action) => {
  if (action.type == "SELECTED_AUTHOR") {
    return action.payload;
  }
  if (action.type == "SELECTED_SOURCE") {
    if (action.payload !== "Poetry") {
      return [];
    } else return state;
  } else return state;
};

const poemsReducer = (state = [], action) => {
  //store state as array of javascript objects
  if (action.type == "FETCH_POEMS") {
    return action.payload;
  }
  if (action.type == "SELECTED_SOURCE") {
    if (action.payload !== "Poetry") {
      return [];
    } else return state;
  } else return state;
};

const hoveredLineReducer = (state = {}, action) => {
  if (action.type == "HOVERED_OVER_LINE") {
    return action.payload;
  } else return state;
};

const myPoemReducer = (state = [], action) => {
  if (action.type == "STOLE_LINE") {
    const newState = state.slice();

    newState.push({
      line: action.payload.line,
      author: action.payload.author,
      title: action.payload.title,
      id: Math.floor(Math.random() * 100),
      order: newState.length,
    });

    return newState;
  } else if (action.type == "REMOVED_LINE") {
    return state.filter((value) => {
      return value !== action.payload;
    });
  } else if (action.type == "SWAPPED_LINE") {
    const newState = state.slice();
    [newState[action.payload.first], newState[action.payload.second]] = [
      newState[action.payload.second],
      newState[action.payload.first],
    ];

    return newState;
  } else if (action.type == "ADDED_CUSTOM_LINE") {
    const newState = state.slice();
    newState.push({
      line: action.payload,
      id: Math.floor(Math.random() * 100),
      order: newState.length,
      author: "You",
    });
    return newState;
  }

  return state;
};

const dragReducer = (state = null, action) => {
  if (action.type == "DRAGGED_ELEMENT") {
    return action.payload;
  } else return state;
};

const inputVisibilityReducer = (state = false, action) => {
  if (action.type == "MADE_INPUT_VISIBLE") {
    return action.payload;
  } else return state;
};

const customTextReducer = (state = [], action) => {
  if (action.type == "INPUTTED_CUSTOM_TEXT") {
    return action.payload;
  } else return state;
};

const dictionaryWordInputReducer = (state = [], action) => {
  if (action.type == "INPUT_DICTIONARY_WORD_TEXT") {
    return action.payload;
  } else return state;
};

const selectedSourceReducer = (state = [], action) => {
  if (action.type == "SELECTED_SOURCE") {
    return action.payload;
  } else return state;
};

const sourcesReducer = () => {
  return ["Poetry", "Dictionary"];
};

const selectedPoemReducer = (state = [], action) => {
  if (action.type == "SELECTED_POEM") {
    return action.payload;
  } else if (action.type == "SELECTED_SOURCE") {
    if (action.payload !== "Poetry") {
      return [];
    } else {
      return state;
    }
  } else return state;
};

const textToStealReducer = (state = [], action) => {
  if (action.type == "SELECTED_TEXT_TO_STEAL") {
    return action.payload;
  }
  if (action.type == "SELECTED_SOURCE") {
    return [];
  } else return state;
};

export default combineReducers({
  selectedSource: selectedSourceReducer,
  sources: sourcesReducer,
  authors: authorsReducer,
  selectedPoem: selectedPoemReducer,
  author: authorReducer,
  poems: poemsReducer,
  myPoem: myPoemReducer,
  textToSteal: textToStealReducer,
  dragId: dragReducer,
  inputVisibility: inputVisibilityReducer,
  customText: customTextReducer,
  hoveredLine: hoveredLineReducer,
  dictionaryWordInput: dictionaryWordInputReducer,
  wordDictionaryInformation: wordDictionaryInformationReducer,
});
