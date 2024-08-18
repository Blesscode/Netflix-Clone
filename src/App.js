
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
    <Nav/>
      {/*Nav */}

      <Banner />
      {/*<p>netflix clone Front-end</p>*/}
      <Row title="Netflix Original" fetchUrl={request.fetchNetflixOriginal} isLargeRow/>{ /*pass prop tp comp. *//* isLargeRow: to provide different image size acc */}
      <Row title="Trending Now"  fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated"  fetchUrl={request.fetchTopRated}/>
      <Row title="Horror"  fetchUrl={request.fetchHorrorMovie}/>
      <Row title="Romance"  fetchUrl={request.fetchRomanceMovie}/>
      <Row title="Action"  fetchUrl={request.fetchActionMovie}/>
      <Row title="comedy"  fetchUrl={request.fetchComdeyMovie}/>
      <Row title="Documentary"  fetchUrl={request.fetchDocumentarie}/>
    </div>
  );
}

export default App;
