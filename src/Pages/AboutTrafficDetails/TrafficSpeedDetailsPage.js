import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

/**
 * This is the helper function which is used to show details traffic speed data
 * @returns Table with traffic speed data
 */

function TrafficSpeedDetailsPage() {
  const [Data, SetData] = useState([])
  const getData = async () => {
    try {
      const response = await axios.get("https://data.cityofnewyork.us/resource/i4gi-tjb9.json");
      SetData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Speed",
      selector: (row) => row.speed,
    },
    {
      name: "Travel_Time",
      selector: (row) => row.travel_time,
    },
    {
      name: "Date",
      selector: (row) => row.data_as_of,
    },
    {
      name: "Borough",
      selector: (row) => row.borough,
    }
  ]

  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      {/* {console.log(columns)} */}
      <DataTable title="About Traffic Speed Details"
        columns={columns}
        data={Data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight />

    </>
  )
}
export default TrafficSpeedDetailsPage;