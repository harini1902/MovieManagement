// // export type RootStackParamList = {
// //   Home: undefined;
// //   Details: undefined;
// // };
// export type RootStackParamList = {
//   Home: undefined;
//   ProductDetails: {productId: string}; // Passing productId as a parameter
//   Cart: undefined;
// };
export type Movie = {
  id: string;
  name: string;
  releaseDate: string;
  actors: string;
};

export type RootStackParamList = {
  Home: undefined;
  AddEditMovie: {movie?: Movie}; // Optional movie for editing
  ViewMovie: {movie: Movie}; // Movie is required
};
