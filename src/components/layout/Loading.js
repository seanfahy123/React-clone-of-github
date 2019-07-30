import React from "react";
import LoadingGif from "../../images/Loading.gif";

const Loading = () => {
  return (
    <div id="loading">
      <img id="loadingGif" src={LoadingGif} alt="Loading..." />
    </div>
  );
};

export default Loading;
