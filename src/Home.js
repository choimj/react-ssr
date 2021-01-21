import React from "react";
import Helmet from "react-helmet";

const Home = (props) => {
  return (
    <div>
      <Helmet>
        <title>aaaaa</title>
      </Helmet>
      Hello {props.name}!
    </div>
  );
};

export default Home;
