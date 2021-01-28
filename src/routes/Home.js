import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'

// class component 안에서는 HTML 처럼 보이지만 JSX 문법사용
// class 가 아니라 className 사용
class Home extends React.Component {
  state = {
    isLoading: true,
    results: []
  };
  // 비동기 
  getMovies = async () => { 

      const { data : {results}} = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9da4182c0864274f3492c1fe4957b333");
      console.log(results);
      this.setState({ results, isLoading: false })
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, results } = this.state;
    return (
    <section className="container"> 
      { isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
      ) : (
      <>
      <h2>Most Popular Movies</h2>
      <div className="movies">
        { results.map(movie => (
          <Movie 
          // 유일해야하므로 id 를 줘야한다.
          key={movie.id}
          id={movie.id} 
          year={movie.release_date} 
          title={movie.title} 
          summary={movie.overview} 
          poster= {movie.poster_path}
          />
      ))}
      </div></> )}
      </section>
    );
  }
}

export default Home;