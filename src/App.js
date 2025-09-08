import React from "react";
// this  is index.js
import useFetch from "./hooks/useFetch";

function App() {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  console.log(data);

  return (
    <div className="container mx-auto p-4">
      {loading
        ? "...loading"
        : data &&
          data.map((ele) => {
            return <h1>{ele.title}</h1>;
          })}
    </div>
  );
}

export default App;
