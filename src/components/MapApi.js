import React, { Fragment } from "react";

const MapApi = ({ apiData, Child }) => {
  return (
    <Fragment>
      {apiData.map(data => (
        <Child key={data.id} data={data} />
      ))}
    </Fragment>
  );
};

export default MapApi;
