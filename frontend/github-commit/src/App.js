import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import CommitDetails from "./components/getCommitDetail";

import { AppProvider } from "./components/appContext";
import "./App.css";

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="" element={<Home />} />
          <Route
            path="/repositories/owner/repo/commit"
            element={<CommitDetails />}
          />
        </Routes>
      </AppProvider>
    </Router>
  );
}
export default App;
