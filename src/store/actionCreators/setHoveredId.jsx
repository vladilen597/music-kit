const SET_HOVERED_ID = "SET_HOVERED_ID";

const setHoveredId = (id) => {
  return {
    type: SET_HOVERED_ID,
    payload: id,
  };
};

export default setHoveredId;
