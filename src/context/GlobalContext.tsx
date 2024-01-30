import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { IInitState } from "../interface";
import { reducer } from "./reducer";

const initState: IInitState = {
  watchlist: localStorage.getItem("watchlist-movies")
    ? JSON.parse(localStorage.getItem("watchlist-movies")!)
    : [],
  watched: localStorage.getItem("watched-movies")
    ? JSON.parse(localStorage.getItem("watched-movies")!)
    : [],
};

const GlobalContext = createContext(initState);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    localStorage.setItem("watchlist-movies", JSON.stringify(state.watchlist));
    localStorage.setItem("watched-movies", JSON.stringify(state.watched));
  }, [state]);
  return (
    <GlobalContext.Provider
      value={{ watchlist: state.watchlist, watched: state.watched, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const useMovieContext = () => {
  return useContext(GlobalContext);
};
