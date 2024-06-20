import React, { useContext, useState  } from "react";
import { getCommitDetails } from "../services/gitCommit";
import { AppContext } from "./appContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const [commitSha, setCommitSha] = useState("");
  const [error, setError] = useState("");

  const {setCommitDetails} = useContext(AppContext);
  const navigate = useNavigate();


  const handleFetchCommitDetails = async (event) => {
    try {
      event.preventDefault();
      const data = await getCommitDetails(owner, repo, commitSha);
      console.log("commitDetails", data);
      setCommitDetails(data);
      if(data){
      navigate('/repositories/owner/repo/commit');
      }
      setError("");
    } catch (error) {
      console.log("Error", error);
      setError("Error fetching commit details");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Commit Viewer</h1>
        <form onSubmit={handleFetchCommitDetails} className="inpform">
          <input
            type="text"
            placeholder="Owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="inptxt"
            required
          />
          <input
            type="text"
            placeholder="Repo"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            className="inptxt"
            required
          />
          <input
            type="text"
            placeholder="Commit SHA"
            value={commitSha}
            onChange={(e) => setCommitSha(e.target.value)}
            className="inptxt"
            required
          />

          <button type="submit">Get Commit Details</button>
        </form>

        {error && <p>{error}</p>}
      </header>
    </div>
  );
}

export default Home;
