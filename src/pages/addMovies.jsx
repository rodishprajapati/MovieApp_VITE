import { useRef } from "react";
import Header from "../header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ADMovies = () => {
  const movieName = useRef();
  const movieRating = useRef();
  const movieInfo = useRef();
  const navigate = useNavigate();

  const addMovie = async () => {
    const dataToSend = {
      name: movieName.current.value,
      rating: movieRating.current.value,
      info: movieInfo.current.value,
    };
    try {
      await axios.post(`http://localhost:8000/addData`, dataToSend);
    } catch (e) {
      console.log(e);
      alert("cannot add Movie");
    }
  };

  return (
    <>
      <div className="bg-zinc-700">
        <Header title="Add Movies" />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            addMovie();
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
            Add Movie
          </button>
        </form>
      </div>
    </>
  );
};
export default ADMovies;
