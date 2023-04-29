import React, { useEffect, useState } from "react";
import axios from '../Axios'
import requests from '../Requests'

export default function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOrignals); 
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1) 
                ]
            );
            return request;
        }
        fetchData()
    }, [])

    function truncate (string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
  return (
    <div
      className="h-[448px] object-cover text-white"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="ml-[30px] pt-[140px] h-[190px] text-white">
        <h1 className="text-[48px] font-[800] pb-[4.8px]">
            {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div>
          <button className="border-none cursor-pointer outline-none font-[800] rounded-sm pl-[32px] pr-[32px] mr-[16px] pt-[8px] pb-[8px] bg-[#535151] hover:text-[#000] hover:bg-[#e6e6e6] transition-all duration-500">
            Play
          </button>
          <button className="border-none cursor-pointer outline-none font-[800] rounded-sm pl-[32px] pr-[32px] mr-[16px] pt-[8px] pb-[8px] bg-[#535151] hover:text-[#000] hover:bg-[#e6e6e6] transition-all duration-500">
            My List
          </button>
        </div>
        <h1 className="w-[720px] leading-[20.8px] pt-[16px] text-[12.8px] m-w-[360px] h-[80px]">
          {truncate(
            movie?.overview,
         150)}
        </h1>
      </div>
      {/* <div className="h-[118.4px] bg-gradient-to-r from-transparent to-white" /> */}
    </div>
  );
}
