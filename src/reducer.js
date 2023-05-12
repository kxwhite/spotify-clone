export const initialState = {
  user: null,
  playlists: [],
  playlist: null,
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // REMOVE AFTER TESTING
  // token: "BQCVMfeBfdtU1FYpYaym4o1y6QPv4ibK6x1n6fvCsaJtZG7UIc…jNqlTMfZ9ywhA6yikvijidqPd2RqwisxnjAwWxb4i1-oSDE5M",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    default:
      return state;
  }
};

export default reducer;
