import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
// import axios from 'axios'

/**
 * This is the helper function  Which is used to Filter the data
 * @returns 
 */


function FilterDataPage() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [filterdata, setFilterdata] = useState([])
  useEffect(() => {
    fetch("https://data.cityofnewyork.us/resource/i4gi-tjb9.json")
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.log(error));
  })

  useEffect(() => {
    setFilterdata(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  console.log("search update 123 useeffecl data", data)
  console.log("filterdata for chart11111", filterdata)

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,

      id: "id"
    },
    {
      name: "Speed",
      selector: (row) => row.speed,

      id: 'speed'
    },
    {
      name: "Date",
      selector: (row) => row.data_as_of,

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
  console.log("thisis a log test", data)
  useEffect(() => {
    console.log("search update 123 useeffect")
    console.log("search update 123 search", search)
    const result = data.filter(rowdata => {
      return rowdata.borough.toLowerCase().startsWith(search.toLowerCase())
        || rowdata.id.toLowerCase().startsWith(search.toLowerCase())
        || rowdata.speed.toLowerCase().startsWith(search.toLowerCase())
        || rowdata.data_as_of.toLowerCase().startsWith(search.toLowerCase())
        || rowdata.travel_time.toLowerCase().startsWith(search.toLowerCase());
    });
    setFilterdata(result)// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <>
      {console.log("any data", data)}
      <DataTable title="Traffic Speed Data"
        columns={columns}
        data={filterdata}
        pagination
        fixedHeader
        fixedHeaderScrollHeight='550px'
        selectableRows
        selectableRowsHighlight
        defaultSortFieldId={'speed'}
        highlightOnHover
        actions={
          <Link to="/"><button className='btn'>Back</button></Link>}
        subHeader
        subHeaderComponent={
          <input type="text" placeholder="search here" className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
        subHeaderAlign="center"
      />

    </>

  )
}

export default FilterDataPage