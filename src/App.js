import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from "./Pages/IndexPage/IndexPage";
import TrafficSpeedDetailsPage from "./Pages/AboutTrafficDetails/TrafficSpeedDetailsPage";
import FilterDataPage from "./Pages/Filter/FilterDataPage";
import SortPage from "./Pages/Sorting/SortPage";
import GetDataPage from './AnotherMethod/GetDataPage';
import RangePage from './Pages/Range/RangePage';

/**
 * This is helper function to display all pages
 * @returns 
 */
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/trafficspeeddetailspage" element={<TrafficSpeedDetailsPage />} />
        <Route path="/traffic" element={<FilterDataPage />} />
        <Route path="/average" element={<SortPage />} />
        <Route path="/getdata" element={<GetDataPage/>}/>
        <Route path="/range" element={<RangePage/>}/>
      </Routes>
    </Router>
    // <>
    // <IndexPage/>
    // <TrafficSpeedDetailsPage/>
    // <Searchdata/>
    // <AverageSpeedDetailsPage/>

    // </>

  );
}

export default App;
