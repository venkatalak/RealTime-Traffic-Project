import React from 'react';
import { Link } from 'react-router-dom';
import './IndexPage.css';


/**
 * This is the helper function which is used to show Different functionalities of realtime traffic
 * @returns Functionalities
 */


function IndexPage() {
  return (
    <div>
      <nav className='traffic'>
        <p>Welcome to Real-Time Traffic Speed Data</p>
      </nav>
      <div className='overall'></div>
      <>
        <div className="whole">
          <div className="buttons">
            <table className="table_librarian">
              <tr>
              <th>
                  <Link to="/getdata"><button className="custom-btn btn-12"><span>Table Data</span><span>Click!</span></button></Link>
                </th>
                <th>
                  <Link to="/trafficspeeddetailspage"><button className="custom-btn btn-12"><span>Search Data</span><span>Click!</span></button></Link>
                </th>
                <th>
                  <Link to="/average"><button className="custom-btn btn-12"><span>Sorting Data</span><span>Click!</span></button></Link>
                </th>
                <th>
                  <Link to="/traffic"><button className="custom-btn btn-12"><span>Filter Data</span><span>Click!</span></button></Link>
                </th>
                <th>
                  <Link to="/range"><button className="custom-btn btn-12"><span>Range Data</span><span>Click!</span></button></Link>
                </th>

              </tr>
              {/* <tr>
                <td>
                  <Link to="/trafficspeeddetailspage"><button className="button_notification">Filter Data</button></Link>
                </td>
                <td>
                  <Link to="/trafficspeeddetailspage"><button className="button_logout">Check Distance Time</button></Link>
                </td>
              </tr> */}
            

            </table>

          </div>
        </div>
      </>
    </div>
  )
}
export default IndexPage;