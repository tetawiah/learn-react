import { useState, useEffect } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const key = "32290a11";

  useEffect(() => {
    const controller = new AbortController();

    async function getMovies() {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
          { signal: controller.signal }
        );
        if (!response.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    // handleCloseMovie();
    getMovies();

    return function () {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, error };
}
