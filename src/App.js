import IndexPage from "./Pages/IndexPage/IndexPage";
import TrafficSpeedDetailsPage from "./Pages/AboutTrafficDetails/TrafficSpeedDetailsPage";
import AverageSpeedDetailsPage from "./Pages/AverageSpeedDetails/AverageSpeedDetailsPage";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * This is helper function to display the all pages
 * @returns 
 */
function App() {
  return (
    // <Router>

    //   <Routes>
    //     <Route path="/" element={<IndexPage/>} />
    //     <Route path="/trafficdetailspage" element={<TrafficSpeedDetailsPage/>} />
    //     <Route path="/" element={<AverageSpeedDetailsPage/>} />
    //   </Routes>
    // </Router>
    <>
    <IndexPage/>
    <TrafficSpeedDetailsPage/>
    <AverageSpeedDetailsPage/>
    </>
    
  );
}

export default App;
