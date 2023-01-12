import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import {Link} from 'react-router-dom';

/**
 * This is helper Function which is used to show the Speed details of endpoints
 * @returns 
 */

function AverageSpeedDetailsPage() {
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
      sortable:true
    },
    {
      name: "End Points",
      selector: (row) => row.link_points,
    },
    {
      name: "Speed",
      selector: (row) => row.speed,
    }
  ]

  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      {/* {console.log(columns)} */}
      <DataTable title=" Average Speed Details"
        columns={columns}
        data={Data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight 
        actions={<Link to="/"></Link>}/>  

    </>
  )
}
export default AverageSpeedDetailsPage;