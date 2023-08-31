import React, { useContext, useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import APPCONTEXT from "../../context/APP";

function PurchaseChickses() {
  const { user } = useContext(APPCONTEXT);
  const request = useAxios();
  const [purchases, setPurchases] = useState([]); 

  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    try {
      const response = await request({
        url: "purchases", 
        method: "GET",
      });
      setPurchases(response); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container p-3 bg-light">
      <div className="rounded shadow bg-light p-3">
        <table className="table table-striped table-bordered">
          <thead className="table-primary">
            <tr>
              <th>Amount</th>
              <th>Poultry Type</th>
            </tr>
          </thead>
          <tbody>
            {purchases && purchases.map((purchase) => (
              <tr key={purchase.id}>
                <td>{purchase.amount}</td>
                <td>{purchase.poultry_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchaseChickses;
