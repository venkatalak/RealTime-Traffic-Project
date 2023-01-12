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
                  <button className="button_student"><Link to="/trafficspeeddetailspage">About Traffic Details</Link></button>
                </th>
                <th>
                  <button className="button_books">Check Traffic locations</button>
                </th>

              </tr>
              <tr>
                <td>
                  {/* notification means feedback , requested books, complaints etc */}
                  <button className="button_notification">Check Speed Details</button>
                </td>
                <td>
                  <button className="button_logout">Check Distance Time</button>
                </td>
              </tr>



            </table>
          </div></div>
      </>
    </div>
  )
}
export default IndexPage;