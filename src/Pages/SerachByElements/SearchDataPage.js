import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";

/**
 * This is helper which is used to search the data by giving inputs
 * @returns 
 */

function SearchDataPage() {
  const [userData, setUserdata] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getUserdata = async () => {
      const reqData = await fetch("https://data.cityofnewyork.us/resource/i4gi-tjb9.json");
      const resData = await reqData.json();
      console.log(resData);
      setUserdata(resData);
      setFilterdata(resData);

    }
    getUserdata();
  }, []);

  const handlesearch = (event) => {
    const getSearch = event.target.value;
    if (getSearch.length > 0) {
      const searchdata = userData.filter((item) => item.borough.toLowerCase().includes(getSearch));
      setUserdata(searchdata);
    } else {
      setUserdata(filterdata);
    }
    setQuery(getSearch);
  }


  return (

    <React.Fragment>
      <Container>
        <div className='row mt-3'>
          <div className='col-md-12 mt-3 mb-3'>
            <h3 className='mb-3'>Search record Datatable </h3>
            <div className="col-md-6">
              <input type="text" name='name' value={query} className="form-control" onChange={(e) => handlesearch(e)} placeholder='Search...' />
            </div>
          </div>

          <div className='col-md-12'>
            <table className="table" style={{ color: "#fff" }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Speed</th>
                  <th>Travel_Time</th>
                  <th>Date</th>
                  <th>Borough/City</th>
                </tr>
              </thead>
              <tbody>
                {/* {
                  userData.map((getUser, index) => (
                    <tr key={index}>
                      <td>{index + 1} </td>
                      <td>{getUser.id}</td>
                      <td>{getUser.speed}</td>
                      <td>{getUser.Borough}</td>
                    </tr>
                  ))} */}
                  <tr>
                    <td>1</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                  </tr>

              </tbody>
            </table>
          </div>
        </div>
      </Container>

    </React.Fragment>
  );
}
export default SearchDataPage;