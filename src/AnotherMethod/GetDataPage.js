import React from "react";
import { useEffect, useState } from "react";
import "./GetDataPage.css"


/**
 * This is helper function which is used to display the data in tablular format
 * @returns 
 */
function GetDataPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://data.cityofnewyork.us/resource/i4gi-tjb9.json";
    fetch(url)
      .then((response) => response.json())

      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      )
        : (


          <div className="getdata">
          <table className="table_get">
            <thead>
              <th>ID</th>
              <th>Speed</th>
              <th>Date_as_of</th>
              <th>Travel_time</th>
              <th>Borough</th>
            </thead>
            {data.map((user) => (
              <tbody>
                <td>{user.id}  </td>
                <td>{user.speed}</td>
                <td>{user.data_as_of}</td>
                <td>{user.travel_time}</td>
                <td>{user.borough}</td>

              </tbody>
            ))}
          </table>
          </div>

        )}
    </div>
  );
}

export default GetDataPage;