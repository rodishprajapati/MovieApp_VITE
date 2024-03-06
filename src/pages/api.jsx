import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header";
// import EditMovies from "./editMovies";
import { useNavigate } from "react-router-dom";
import { Button, Empty } from "antd";

const API = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/addData`);
      setMovies(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteMovie = async (movie_id) => {
    try {
      await axios.delete(`http://localhost:8000/addData/${movie_id}`);
      getMovies();
    } catch (error) {
      console.log(error);
      console.log("cannot delete movie");
    }
  };
  return (
    <>
      <div>
        <Header title="Movies" />

        <div className="body bg-zinc-700 h-full">
          {/* <div className="bg-blue-400 h-fitflex flex-direction-row ">
            <button className="bg-blue-900 h-6 w-10 rounded-md m-1 float-left">
              back
            </button>
            <Navigate to="/addMovie"/>
          </div> */}

          {movies.length < 1 && (
            <>
              <div className="text-white justify-items-center items-center">
                No Movies available!!
                <Empty />;
              </div>
            </>
          )}

          {movies.map((movie) => {
            return (
              <>
                <div className="flex flex-direction-rows w-full h-[100vh]">
                  <div className="float-left w-full bg-zinc-500 m-2 rounded">
                    <div>
                      <h1>Movie Name: {movie.name}</h1>
                    </div>
                    <div>Info: {movie.info}</div>
                    <div>Ratings: {movie.rating}</div>

                    <hr />
                  </div>
                  <div className="float-right bg-red-500 flex flex-direction-row">
                    <Button
                      className="bg-red-700 h-10 w-[fit-content] rounded-md m-1 mt-5"
                      onClick={() => navigate(`/addData/${movie._id}`)}
                    >
                      {" "}
                      update
                    </Button>
                    {/* <button
                      className="bg-red-700 h-10 w-[fit-content] rounded-md m-1 mt-5"
                      onClick={() => navigate(`/addData/${movie._id}`)}
                    >
                      update
                    </button> */}

                    {/* <button
                      className="bg-red-700 h-10 w-10 rounded-md m-1 mt-5"
                      onClick={() => deleteMovie(movie._id)}
                    >
                      X
                    </button> */}
                    <Button
                      type="primary"
                      shape="circle"
                      className="bg-red-700 h-10 w-10 rounded-md m-1 mt-5"
                      onClick={() => deleteMovie(movie._id)}
                    >
                      X
                    </Button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default API;
