import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-green-400 h-10 w-fillflex flex-direction-row ">
        <div>
          {props.title === "Add Movies" && (
            <>
              <button
                className="bg-blue-900 h-6 w-10 rounded-md m-0 float-left"
                onClick={() => {
                  navigate(-1);
                }}
              >
                back
              </button>
              <div className="flex justify-between">{props.title}</div>
            </>
          )}
        </div>

        <div>
          {props.title === "Movies" && (
            <>
              <div className="float-left m-2">{props.title}</div>

              <button
                className="bg-blue-900 h-6 w-10 rounded-md m-2 float-right"
                onClick={() => {
                  navigate("/addData");
                }}
              >
                +
              </button>
            </>
          )}
        </div>

        <div>
          {props.title === "Edit Movies" && (
            <>
              <button
                className="bg-blue-900 h-6 w-10 rounded-md m-0 float-left"
                onClick={() => {
                  navigate(-1);
                }}
              >
                back
              </button>
              <div className="flex justify-between">{props.title}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
