import { useRef } from "react";
import Header from "../header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ADDMovies = () => {
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
      <Header title="Add Movies" />
      hello from add Data
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMovie();
          navigate(-1);
        }}
      >
        <div>
          <div>
            MovieName:
            <input className="border-2 " type="text" ref={movieName} />
          </div>
          <div>
            Info:
            <input className="border-2 " type="text" ref={movieInfo} />
          </div>
          <div>
            Rating:
            <input className="border-2 " type="text" ref={movieRating} />
          </div>
        </div>
        <button type="submit" className="bg-green-700 rounded-md">
          Add Movie
        </button>
      </form>
    </>
  );
};
export default ADDMovies;
