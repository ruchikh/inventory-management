import React from "react";

import ListCard from "./ListCard";

const DataLists = props => {
  const { lists, removeData, handleUpdate } = props;
  return (
    <div>
      {lists.map(data => {
        return (
          <ListCard
            key={data.Id}
            Id={data.Id}
            Title={data.Title}
            Description={data.Description}
            Quantity={data.Quantity}
            removeData={removeData}
            handleUpdate={handleUpdate}
          />
        );
      })}
    </div>
  );
};


export default DataLists;
