import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import APPCONTEXT from "../../context/APP";

function PurchaseChicks() {
  const { user } = useContext(APPCONTEXT);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: "",
    vaccine_name: "",
    book_date: "",
  });

  const request = useAxios();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await request({
        url: "vaccinations",
        method: "POST",
        data: formData,
      });
      navigate("/vaccinations");
      const newFarmerData = response.data;
      setFormData({
        age: "",
        vaccine_name: "",
        book_date: "",
      });
      localStorage.setItem(
        "farmer_sessions",
        JSON.stringify(response.farmer.id)
      );
    } catch (error) {
      console.error("Error:", error);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <div className="container p-3 bg-light h-full">
      <form onSubmit={handleSubmit}>
        <div className="flex rounded shadow bg-light p-3 justify-center items-center ">
          <div className="col-md-5">
            <div className="mb-3">
              <label htmlFor="ageInput" className="form-label p-3">
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="ageInput"
                placeholder="Enter your age"
                autoComplete="off"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="vaccine" className="form-label p-3">
                Vaccine
              </label>
              <select
                className="form-select text-sm"
                name="vaccine_name"
                id="vaccine"
                value={formData.vaccine_name}
                onChange={handleChange}
              >
                <option value="">Select vaccine </option>
                <option value="New Castle 100doses">New Castle 100doses</option>
                <option value="New Castle 200doses">New Castle 200doses</option>
                <option value="Gumboro 100doses">Gumboro 100doses</option>
                <option value="Gumboro 100doses">Gumboro 100doses</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="dateInput" className="form-label p-3">
                Book Date
              </label>
              <input
                type="date"
                className="form-control"
                id="dateInput"
                autoComplete="off"
                name="book_date"
                value={formData.book_date}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-green-700 text-white rounded-full px-4 py-2 hover:bg-green-600">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PurchaseChicks;
