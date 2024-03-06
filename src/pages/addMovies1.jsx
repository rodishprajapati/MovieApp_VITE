// import { useRef } from "react";
import Header from "../header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "antd/es/form/Form";
import { Button, Input } from "antd";
const AddMovies = () => {
  const navigate = useNavigate();

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
      <div className="bg-zinc-700">
        <Header title="Add Movies" />

        <Form
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
            remember: true,
          }}
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
            <Input />
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
            <Input />
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
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="default" htmlType="submit" className="">
              Add Movie
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default AddMovies;
