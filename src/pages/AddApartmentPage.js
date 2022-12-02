import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddApartmentPage = () => {
  const [headline, setHeadline] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [pricePerDay, setPricePerDay] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title: headline, pricePerDay: pricePerDay, img: imgUrl };

    axios
      .post("https://ironbnb-m3.herokuapp.com/apartments", body)
      .then((response) => {
        console.log("alright, updated with", body);
        setHeadline("");
        setImgUrl("");
        setPricePerDay(0);
        navigate("/");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="headline">Headline</label>
        <input
          type="text"
          name="headline"
          value={headline}
          onChange={(e) => {
            setHeadline(e.target.value);
          }}
        />
        <label htmlFor="imgUrl">Image</label>
        <input
          type="text"
          name="imgUrl"
          value={imgUrl}
          onChange={(e) => {
            setImgUrl(e.target.value);
          }}
        />
        <label htmlFor="pricePerDay">PPD</label>
        <input
          type="number"
          name="pricePerDay"
          value={pricePerDay}
          onChange={(e) => {
            setPricePerDay(e.target.value);
          }}
        />
        <button type="submit">SUBMIT!!!!</button>
      </form>
    </div>
  );
};

export default AddApartmentPage;
