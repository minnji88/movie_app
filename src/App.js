import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css'

// class component 안에서는 HTML 처럼 보이지만 JSX 문법사용
// class 가 아니라 className 사용
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  // 비동기 
  getMovies = async () => {
    const { 
      data : { 
        data : { movies }}
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies);
    this.setState({ movies, isLoading: false })
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
    <section className="container"> 
      { isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
      ) : (
      <div className="movies">
        { movies.map(movie => (
          <Movie 
          // 유일해야하므로 id 를 줘야한다.
          key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image}
          genres={movie.genres}
          />
      ))}
      </div>
      )}
      </section>
    );
  }
}

export default App;