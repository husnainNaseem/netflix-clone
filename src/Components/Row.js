import React, { useEffect, useState } from "react";
import axios from "../Axios";

export default function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="text-white ml-[20px]">
      <h2>{title}</h2>

      <div className="flex overflow-y-hidden overflow-x-scroll no-scrollbar p-[20px] w-full transition-transform">
        {movies?.map(
          (movie) =>(
            (isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                className="max-h-[100px] mr-[10px] object-contain hover:opacity[20px] hover:scale-[1.08]"
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}
