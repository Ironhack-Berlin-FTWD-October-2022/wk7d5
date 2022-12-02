import React from "react";

const AddApartmentPage = ({ apartments }) => {
  console.log(apartments);
  return (
    <div>
      {apartments.map((apartment) => {
        return (
          <div key={apartment._id}>
            <img src={apartment.img} alt="" />
            <h3>{apartment.title}</h3>
            <h3>{apartment.pricePerDay} EUR per day</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AddApartmentPage;
