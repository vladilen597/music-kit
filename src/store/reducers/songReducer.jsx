const initialStore = {
  songId: 0,
  isPlaying: false,
  hoveredId: 0,
};

const songReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "SET_SONG_ID":
      return {
        ...state,
        songId: action.payload,
      };
    case "TOGGLE_PLAYING":
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case "SET_PLAYING":
      return {
        ...state,
        isPlaying: true,
      };
    case "SET_HOVERED_ID":
      return {
        ...state,
        hoveredId: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
