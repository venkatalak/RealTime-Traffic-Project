import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import {Link} from "react-router-dom";

/**
 * This is the helper function which is used to display the speed details between given range
 * @returns 
 */


function RangePage() {
  const [data,setData]=useState([])
  const [speed1,setspeed1]=useState("")
  const [speed2,setspeed2]=useState("")
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

  useEffect(()=>{
    getData();
  },[])


  // to filter speed data whenever speed changes useeffect hook will be effected
 useEffect(()=>{
  // console.log("speed update useeffect")
    
    
  const result=data.filter(rowdata=>{
    // console.log("date selected",typeof(speed1),speed1)
    return parseInt(rowdata.speed)>=(parseInt(speed1)) && parseInt(rowdata.speed)<=(parseInt(speed2)) ;
  });
  setFilterdata(result)// eslint-disable-next-line react-hooks/exhaustive-deps
 },[speed1,speed2])

  return(
    <> 
    <DataTable title="Traffic Speed Data"
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
    subHeader
    subHeaderComponent={
        <>
      <input type="number" placeholder="minimum speed" className="input-speed"
      value={speed1}
      onChange={(e)=>setspeed1(e.target.value)}
      />
      <input type="number" placeholder="maximum speed" className="input-speed"
      value={speed2}
      onChange={(e)=>setspeed2(e.target.value)}
      />
      </>
     
    }
      
    subHeaderAlign="center"
      />
    </>

  )
}

export default RangePage