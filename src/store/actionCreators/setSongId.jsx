const SET_SONG_ID = "SET_SONG_ID";

const setSongId = (id) => {
  return {
    type: SET_SONG_ID,
    payload: id,
  };
};

export default setSongId;
