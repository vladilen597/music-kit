const initialStore = {
  songId: 0,
  isPlaying: false,
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
    default:
      return state;
  }
};

export default songReducer;
