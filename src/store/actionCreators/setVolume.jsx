const SET_VOLUME = "SET_VOLUME";

const setVolume = (volume) => {
  return {
    type: SET_VOLUME,
    payload: volume,
  };
};

export default setVolume;
