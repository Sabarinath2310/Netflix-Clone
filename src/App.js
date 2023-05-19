
import './App.css';
import './Row.css'
import Row from './Row'
import request from './Request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      {/* <h1>Netflix Clone</h1> */}
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINAL" isLargeRow fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending}/>
      <Row title='TOP RATED' fetchUrl={request.fetchTopRated} />
      <Row title='ACTION MOVIES' fetchUrl={request.fetchActionMovies} />
      <Row title='COMEDY MOVIES' fetchUrl={request.fetchComedyMovies} />
      <Row title='HORROR MOVIES' fetchUrl={request.fetchHorrorMovies} />
      <Row title='ROMANCE MOVIES' fetchUrl={request.fetchRomanceMovies} />
      <Row title='DOCUMENTARIES' fetchUrl={request.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
