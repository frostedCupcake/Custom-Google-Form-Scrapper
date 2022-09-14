import SearchField from "./components/SearchField";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CoursePage from "./components/CoursePage";
import React from "react";
function App() {
  const [data, setData] = React.useState({});
  console.log(data);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<SearchField data={data} setData={setData} />}
          />
          <Route path="/course" element={<CoursePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
