import axios from "axios";

const TestAxios = () => {
  const BASE_URL = "http://localhost:3001/";
  const onClickRequest = () => {
    axios.get(BASE_URL + "notes").then((res) => {
      console.log(res);
    });

    axios.get(BASE_URL + "foobar").catch(err => {
      console.log(err);
    });
  };

  return (
    <>
      <h2>Test Axios</h2>
      <button onClick={onClickRequest}>Click to Fetch</button>
    </>
  );
};

export default function PartC() {
  return (
    <>
      <h1>C - Data Server & Request</h1>
      <TestAxios />
    </>
  );
}
