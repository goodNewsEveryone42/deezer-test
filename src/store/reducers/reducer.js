export const initState = {
  list: []
};

export function reducer(state = initState, action) {
  switch(action.type) {
      case 'FETCH_TOP_MUSIC': return { ...state, list: action.payload };
      default: return state;
  }
}