import React, { useContext, useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import APPCONTEXT from "../../context/APP";

function Vaccinations() {
  const { user } = useContext(APPCONTEXT);
  const [vaccinationData, setVaccinationData] = useState([]);
  const request = useAxios();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await request({
        url: "vaccinations", // Update with the appropriate URL
        method: "GET",
      });
      setVaccinationData(response);
    } catch (error) {
      console.error("Error:", error);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <div className="container p-3 bg-light">
      <div className="rounded shadow bg-light p-3">
        <table className="table table-striped table-bordered text-center">
          <thead className="table-primary">
            <tr>
              <th scope="col">Age</th>
              <th scope="col">Vaccine</th>
              <th scope="col">Book Date</th>
            </tr>
          </thead>
          <tbody>
            {vaccinationData && vaccinationData.map((record) => (
              <tr key={record.id}>
                <td>{record.age}</td>
                <td>{record.vaccine_name}</td>
                <td>{record.book_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vaccinations;
