import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import APPCONTEXT from "../../context/APP";

function PurchaseChicks() {
  const { user } = useContext(APPCONTEXT);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    amount: "",
    poultry_type: "",
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
        url: "purchases",
        method: "POST",
        data: formData,
      });
      navigate("/purchase-chicks");
      const newFarmerData = response.data;
      setFormData({
        amount: "",
        poultry_type: "",
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
              <label htmlFor="amountInput" className="form-label p-3">
                Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="amountInput"
                placeholder="Enter your amount"
                autoComplete="off"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="poultry_type" className="form-label p-3">
                Poultry Type
              </label>
              <select
                className="form-select text-sm"
                name="poultry_type"
                id="poultry_type"
                value={formData.poultry_type}
                onChange={handleChange}
              >
                <option value="">Select poultry type</option>
                <option value="Meat breeds">Meat breeds</option>
                <option value="Egg-laying breeds">Egg-laying breeds</option>
                <option value="Dual-purpose breeds">Dual-purpose breeds</option>
                <option value="Exhibition/show poultry">Exhibition/show poultry</option>
              </select>
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
