import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


function TrafficSpeedDetailsPage() {
  const [data,setData]=useState([])
  const [search,setSearch]=useState("")
  const [filterdata,setFilterdata]=useState([])
  const getData = async () =>{
    try{
      const response =await axios.get("https://data.cityofnewyork.us/resource/i4gi-tjb9.json");
      setData(response.data);
      setFilterdata(response.data)
    }catch(error){
      console.log(error);
    } 
  };
  const columns=[
    {
      name:"ID",
      selector:(row)=>row.id,
      // sortable:true
    },
    {
      name:"Speed",
      selector:(row)=>row.speed,
      // sortable:true
    },
    {
      name:"Date",
      selector:(row)=>row.data_as_of,
      // sortable:true
    },
    {
      name:"Travel Time",
      selector:(row)=>row.travel_time,
    },
    {
      name:"Borough or city",
      selector:(row)=>row.borough,
    }
  ]

  useEffect(()=>{
    getData();
  },[])


  // to filter search data whenever search changes useeffect hook will be effected
 useEffect(()=>{
  const result=data.filter(rowdata=>{
    return rowdata.borough.toLowerCase().match(search.toLowerCase());
   
  });
  setFilterdata(result)
 },[search])

  return(
    <> 
    {console.log("any data",data)}
    <DataTable title="Real Time Traffic Speed data"
     columns={columns} 
     data={filterdata} 
     pagination
     fixedHeader
     fixedHeaderScrollHeight='550px'
     selectableRows
     selectableRowsHighlight
     highlightOnHover
     actions={<></>
 }
    subHeader
    subHeaderComponent={
      <input type="text" placeholder="search here" className="input-search"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
    }
    subHeaderAlign="right"
      />

    </>

  )
}

export default TrafficSpeedDetailsPage;