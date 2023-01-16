import React, { useEffect, useState } from "react";
import "./TrafficSpeedDetailsPage.css";
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Select from "react-select";
import { Link } from "react-router-dom";


/**
 * This is the helper function which is used to search the data by borough names
 * @returns 
 */

function TrafficSpeedDetailsPage() {

  const [selectedOptions, setSelectedOptions] = useState();
  const [filterdata, setFilterdata] = useState([])


  const [data, setData] = useState([])
  const getData = async () => {
    try {
      const response = await axios.get("https://data.cityofnewyork.us/resource/i4gi-tjb9.json");
      setData(response.data);
      setFilterdata(response.data)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getData();
  }, [])
  //showing data in tables
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "Speed",
      selector: (row) => row.speed,
      sortable: true
    },
    {
      name: "Date",
      selector: (row) => row.data_as_of,
      sortable: true
    },
    {
      name: "Travel Time",
      selector: (row) => row.travel_time,
    },
    {
      name: "Borough or city",
      selector: (row) => row.borough,
    }
  ]

  // Array of all options
  const optionList = [
    { value: "Bronx", label: "Bronx" },
    { value: "Brooklyn", label: "Brooklyn" },
    { value: "Manhattan", label: "Manhattan" },
    { value: "Queens", label: "Queens" },
    { value: "Staten Island", label: "Staten Island" }
  ];

  // Function triggered on selection
  // // function handleSelect(data) {
  //   setSelectedOptions(data);
  //   console.log("data ", data)
  //   console.log("data value", data.value)
  //   console.log("selectedOptions", selectedOptions)
  // }

  useEffect(() => {
    const result = data.filter(rowdata => {
      console.log("rowdata useffect", rowdata.borough)
      console.log("selectedOptions useeffect", selectedOptions)
      return rowdata.borough.match(selectedOptions)
    })
    setFilterdata(result)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions])
  console.log("data ", data)
  console.log("data value", data.value)
  console.log("selectedOptions", selectedOptions)

  return (
    <>
      {console.log("any data", data)}
      <DataTable
        className='data'
        columns={columns}
        data={filterdata}
        pagination
        fixedHeader
        fixedHeaderScrollHeight='550px'
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        actions={
          <Link to="/"><button className='btn'>Back</button></Link>}
        // actions={<>
        //   <section id="section02" class="demo">
        //     <h1>Scroll Down Button </h1>
        //     <a href="#section03"><span></span>Scroll</a>
        //   </section>

        // </>
        // }

        subHeader
        subHeaderComponent={<>
          <div className="app">
            <h2>Search Data by City </h2>
            <div className="dropdown-container">
              <Select
                options={optionList}
                placeholder="Select city"
                value={selectedOptions}
                onChange={(e) => setSelectedOptions(e.value)}
                isSearchable={true}
              // isMulti
              />
            </div>
          </div>
        </>
        }
        subHeaderAlign="center"
      />

    </>

  )
}

export default TrafficSpeedDetailsPage;