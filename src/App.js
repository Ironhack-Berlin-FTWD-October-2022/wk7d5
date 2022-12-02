import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddApartmentPage from "./pages/AddApartmentPage";
import ApartmentsPage from "./pages/ApartmentsPage";
import axios from "axios";

const App = () => {
  const [apartments, setAppartment] = useState([]);

  useEffect(() => {
    axios
      .get("https://ironbnb-m3.herokuapp.com/apartments")
      .then((response) => {
        setAppartment(response.data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApartmentsPage apartments={apartments} />} />
        <Route path="/add" element={<AddApartmentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
