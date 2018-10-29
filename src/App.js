import React, { useState, useEffect } from "react";

//generic function
const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    const [item] = jsonData.results;
    setData(item);
    setLoading(false);
  }, []);
  return { data, loading };
};

export default () => {
  //get data from this api endpoint
  const { data, loading } = useFetch("https://api.randomuser.me/");
  return (
    <div className="container">
      {loading ? (
        "Loading"
      ) : (
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={data.picture.large}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              {data.name.first} {data.name.last}
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              <strong> Email: {data.email}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
