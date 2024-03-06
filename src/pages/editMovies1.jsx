// import { useRef } from "react";
import Header from "../header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Form from "antd/es/form/Form";
import { Button, Input } from "antd";
import { useEffect, useState } from "react";
const EditMovies = () => {
  const navigate = useNavigate();
  const { movie_id } = useParams();

  useEffect(() => {
    getSingleMovies(movie_id);
  }, []);

  const [movieData, setMovieData] = useState({});
  const getSingleMovies = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/addData/${movie_id}`
      );
      setMovieData(response.data.data);
      // Form.setFieldsValue({
      //   name: movieData.name,
      //   info: movieData.info,
      //   rating: movieData.rating,
      // });

      //setMovies(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = async (values) => {
    try {
      await axios.post(`http://localhost:8000/addData`, values);
      navigate(-1);
    } catch (e) {
      console.log(e);
      alert("cannot add Movie");
    }
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="bg-zinc-700 h-[100vh]">
        <Header title="Edit Movies" />

        <Form
          className="m-[10vh] ml-[50vh]"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            name: movieData.name,
            info: movieData.info,
            rating: movieData.rating,
          }}
          // initialValues={{
          //   remember: true,
          // }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Movie Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please Enter Movie Name!",
              },
            ]}
          >
            <Input placeholder="movie name" />
          </Form.Item>
          <Form.Item
            label="Info"
            name="info"
            rules={[
              {
                required: true,
                message: "Movie Info Required!",
              },
            ]}
          >
            <Input placeholder="info" />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[
              {
                required: true,
                message: "Movie Rating Required!",
              },
            ]}
          >
            <Input placeholder="rating" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="default" htmlType="submit" className="">
              Edit Movie
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default EditMovies;
