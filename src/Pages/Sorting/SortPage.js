// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import DataTable from 'react-data-table-component';

// /**
//  * This is the helper function which is used to Sort the items
//  * @returns 
//  */


// function SortPage() {
//   const [Data, SetData] = useState([])
//   const getData = async () => {
//     try {
//       const response = await axios.get("https://data.cityofnewyork.us/resource/i4gi-tjb9.json");
//       SetData(response.data);

//     } catch (error) {
//       console.log(error);
//     }

//   };
//   console.log("maindata", Data)
//   const columns = [
//     {
//       name: "ID",
//       selector: (row) => row.id,
//       sortable: true
//     },
//     {
//       name: "Speed",
//       selector: (row) => row.speed,
//       sortable: true
//     },
//     {
//       name: "Date",
//       selector: (row) => row.data_as_of,
//       sortable: true
//     },
//     {
//       name: "Travel Time",
//       selector: (row) => row.travel_time,
//     },
//     {
//       name: "Borough or city",
//       selector: (row) => row.borough,
//     }
//   ]

//   useEffect(() => {
//     getData();
//   }, [])
//   return (
//     <>
//       {/* {console.log(props.data)} */}
//       <DataTable title="Traffic Data"
//         columns={columns}
//         data={Data}
//         pagination
//         fixedHeader
//         fixedHeaderScrollHeight
//         actions={
//           <Link to="/"><button className='btn'>Back</button></Link>} />

//     </>

//   )
// }

// export default SortPage

/**
* This is the helper function which is used to Sort the items
* @returns 
*/


import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import {Link} from "react-router-dom";

/**
 * This is the helper function which is used to sort the data
 * @returns 
 */

function SortPage() {
	const [data, setData] = useState([])
	const [search, setSearch] = useState("")
	const [filterdata, setFilterdata] = useState([])
	const getData = async () => {
		try {
			const response = await axios.get("https://data.cityofnewyork.us/resource/i4gi-tjb9.json");
			setData(response.data);
      setFilterdata(response.data);
		} catch (error) {
			console.log(error);
		}

	};
	console.log(data)

	const columns = [
		{
			name: "Id",
			selector: (row) => row.id,
			sortable: true,
			
		},
		{
			name: "Speed",
			selector: (row) => row.speed.slice(0, 10),
      sortable:true,
      

		},
		{
			name: "Date",
			selector: (row) => row.data_as_of,
      sortable:true,

		},
		{
			name: "Travel_time",
			selector: (row) => row.travel_time,
      sortable:true,
		},
		{
			name: "Borough",
			selector: (row) => row.borough,
      sortable:true,
		}
	
	]
	// const handledate = () => {
	// 	sortable: true
	// }

	useEffect(() => {
		getData();
	}, [])

	useEffect(() => {
		console.log("search update useeffect")
		const result = data.filter(rowdata => {
			return [rowdata.id.toLowerCase().match(search.toLowerCase())];
		});
		setFilterdata(result)
    setSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search])

	return (
		<>
			{/* <div className="tabledata">
				<div className="dropdown">


					<select name="dopdown" id="cars">
						<option value="sort by">Sort by</option>
						<option value="id">ID</option>
						<option value="speed" >Speed</option>
						<option value="date_as_of">Date</option>
						<option value="travel_time">Travel_time</option>
					</select>
					<input type="text " placeholder="search by id" ></input>
				</div> */}
				<DataTable title="Traffic Data"

					columns={columns}
					data={filterdata}
					pagination
					fixedHeader
					fixedHeaderScrollHeight
					defaultSortFieldId={"id"}
					subHeader
          actions={
            <Link to="/"><button className='btn'>Back</button></Link>}

				// subHeaderComponent={
				//   <input type="text" placeholder="search here" className="input-search"
				// //   value={search}
				// //   onChange={(e)=>setSearch(e.target.value)}
				//   />
				// }
				/>
		</>
  )
  }
  export default SortPage;