import React from "react";
import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import Row from "../Components/Row";
import Requests from "../Requests";

export default function HomeScreen() {
  return (
    <div className="bg-black">
      <Nav />

      <Banner />

      <Row title="Netflix orignal" fetchUrl={Requests.fetchNetflixOrignals} isLargeRow />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}
