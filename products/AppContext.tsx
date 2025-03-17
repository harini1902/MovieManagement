import React, {createContext, useReducer, ReactNode} from 'react';

type Movie = {
  id: number;
  name: string;
  releaseDate: string;
  actors: string;
};

type State = {
  movies: Movie[];
};

type Action =
  | {type: 'ADD_MOVIE'; payload: Movie}
  | {type: 'UPDATE_MOVIE'; payload: Movie}
  | {type: 'DELETE_MOVIE'; payload: number};

// ✅ Correctly formatted initial dummy data
const initialState: State = {
  movies: [
    {
      id: 1,
      name: 'Salaar',
      releaseDate: '2023-12-22',
      actors: 'Prabhas, Prithviraj',
    },
    {
      id: 2,
      name: 'Chirutha',
      releaseDate: '2007-09-28',
      actors: 'Ram Charan, Neha Sharma',
    },
    {
      id: 3,
      name: 'Julayi',
      releaseDate: '2012-08-09',
      actors: "Allu Arjun, Ileana D'Cruz",
    },
    {
      id: 4,
      name: 'Run Raja Run',
      releaseDate: '2014-08-01',
      actors: 'Sharwanand, Seerat Kapoor',
    },
  ],
};

const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({state: initialState, dispatch: () => {}});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {...state, movies: [...state.movies, action.payload]};
    case 'UPDATE_MOVIE':
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload.id ? action.payload : movie,
        ),
      };
    case 'DELETE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload),
      };
    default:
      return state;
  }
};

export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
