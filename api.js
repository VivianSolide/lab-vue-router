const service = axios.create({
  baseURL: 'http://localhost:3000/movies',
});

const api = { // Return instead a promise containing all the movies,
  getAll: () => {
    return service
    .get('/')
    .then(movies => {
      return movies;
      console.log(movies);
    })
    .catch(err => {
      console.error(err);
      throw err;
    })
  }, 
    



  getOne: id => null, // Return instead a promise containing one movie,
  addOne: info => null, // Make the request to add amovie and return a promise containing the added movie,
  editOne: (id, info) => null, // Make the request to edit a movie and return a promise containing the edited movie,
  deleteOne: id => null, // Make the request to delete a movie
};
