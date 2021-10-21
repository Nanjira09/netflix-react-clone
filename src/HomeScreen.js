import Banner from './Banner';
import './HomeScreen.css'
import Nav from './Nav'
import requests from './Requests';
import Row from './Row';

const HomeScreen = () => {
    return (
        <div>
            <Nav/>
            <Banner />
            <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    );
}
 
export default HomeScreen;