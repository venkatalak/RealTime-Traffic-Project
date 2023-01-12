import IndexPage from "./Pages/IndexPage/IndexPage";
import TrafficSpeedDetailsPage from "./Pages/AboutTrafficDetails/TrafficSpeedDetailsPage";
import AverageSpeedDetailsPage from "./Pages/AverageSpeedDetails/AverageSpeedDetailsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchDataPage from "./Pages/SerachByElements/SearchDataPage";

/**
 * This is helper function to display the all pages
 * @returns 
 */
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/trafficspeeddetailspage" element={<TrafficSpeedDetailsPage/>} />
        <Route path="/searchdata" element={<SearchDataPage/>} />
        <Route path="/" element={<AverageSpeedDetailsPage/>} />
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
