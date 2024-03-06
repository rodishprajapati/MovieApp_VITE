import { useEffect, useRef } from "react";
import Header from "../header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EdiMovies = () => {
  const { movie_id } = useParams();
  const movieName = useRef();
  const movieRating = useRef();
  const movieInfo = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleMovies(movie_id);
  }, []);

  const getSingleMovies = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/addData/${movie_id}`
      );
      console.log(response.data.data.name);

      movieName.current.value = response.data.data.name;
      movieRating.current.value = response.data.data.rating;
      movieInfo.current.value = response.data.data.info;

      //setMovies(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const editMovie = async () => {
    const dataToSend = {
      _id: movie_id,
      name: movieName.current.value,
      rating: movieRating.current.value,
      info: movieInfo.current.value,
    };
    try {
      await axios.patch(`http://localhost:8000/addData`, dataToSend);
    } catch (e) {
      console.log(e);
      alert("cannot add Movie");
    }
  };

  return (
    <>
      <div className="bg-zinc-700 h-[100vh] ">
        <Header title="Edit Movies" />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            //addMovie();
            editMovie();
            navigate(-1);
          }}
        >
          <div>
            <div className="flex flex-directions-row space-x-7">
              <div className="">MovieName:</div>
              <input className="border-2 " type="text" ref={movieName} />
              <br />
            </div>
            <div className="flex flex-directions-row space-x-20">
              <div className="mr-2">Info:</div>
              <input className="border-2 " type="text" ref={movieInfo} />
            </div>
            <div className="flex flex-directions-row space-x-20">
              <div className="">Rating:</div>
              <input className="border-2 " type="text" ref={movieRating} />
            </div>
          </div>
          <button type="submit" className="bg-green-700 rounded-md">
            Edit Movie
          </button>
        </form>
      </div>
    </>
  );
};
export default EdiMovies;
