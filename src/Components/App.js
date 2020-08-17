import React from "react";
import "../styles.css";
import ScoreCard from "./ScoreCard";

export default function App() {
  return (
    <div className="App">
      <ScoreCard team1="Man United" team2="Norwich City" game="FOOTBALL" />
      {/* <ScoreCard team1="Man United" team2="Norwich City" game="FOOTBALL" /> */}
    </div>
  );
}
