Vue.component('MovieCard', {
  props: {
    movie: Object,
  },
  template: `
	  	<section>
		    <h5> {{movie.title}} </h5>
		    <p> {{movie.year}} </p>
		    <p> {{movie.director}} </p>
		    <p> {{movie.synopsis}} </p>
		    <img :src="movie.poster" alt="poster" height="500px">
  		</section>
	`,
});

Vue.component('MovieForm', {
  props: {
    defaultValues: Object,
  },
  template: `
	<form @submit.prevent="submit()">
		<input v-model="movie.title" placeholder="Title"> <br>
		<input v-model="movie.year" placeholder="Year"> <br>
		<input v-model="movie.director" placeholder="Director"> <br>
		<input v-model="movie.synopsis" placeholder="Synopsis"> <br>
		<input v-model="movie.poster" placeholder="Poster URL"> <br>
		<input type="submit">
	</form>
	`,
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    this.populateForm();
  },
  methods: {
    populateForm() {
      this.movie = Object.assign({}, this.defaultValues || {});
    },
    movieCopy() {
      return Object.assign({}, this.movie);
    },
    submit() {
      this.$emit('submit', this.movieCopy());
    },
  },
});

const Home = Vue.component('Home', {
  template: `
  <div>
  <h1>Welcome</h1>
  <ul>
  <li v-for="movie in movies">
    <router-link :to="movie.id">{{ movie.title }}</router-link>
  </li>
  </ul>
  </div>
`,

  data() {
    return {
      movies: [],
    };
  },

  created() {
    api.getAll().then(movies => {
      this.movies = movies;
      console.log(this.movies);
    })
  }
});

const Movie = Vue.component('Movie', {
  template: `
  <div>
  <h1>{{ movie.title }}</h1>
    <p>Year: {{ movie.year}}</p>
    <p>Director: {{ movie.director}}</p>
    <p>Synopsis: {{ movie.synopsis}}</p>
    <img :src="movie.poster">
  </div> 
`,

  data() {
    return {
      movie: {},
    };
  },

  created() {
    api.getOne(this.$route.params.id).then(movie => {
      this.movie = movie;
    })
  }
});