import React from "react";
import { useContext } from "react";
import { AppContext } from "./appContext";
import "../App.css";
import Accordion from "./accordian";

const CommitDetails = () => {
  const { commitDetails } = useContext(AppContext);

  function getDifferenceInWords(date1, date2) {
    console.log("Dates", date1, date2);
    console.log("date1", new Date(date1));
  
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
  
    const elapsed = Math.abs(new Date(date1) - new Date(date2));
    console.log("elapsed",elapsed)
  
    if (elapsed < msPerMinute) {
      const seconds = Math.floor(elapsed / 1000);
      return `${numberToWords(seconds)} ${pluralize(seconds, 'second')} ago`;
    } else if (elapsed < msPerHour) {
      const minutes = Math.floor(elapsed / msPerMinute);
      return `${numberToWords(minutes)} ${pluralize(minutes, 'minute')} ago`;
    } else if (elapsed < msPerDay) {
      const hours = Math.floor(elapsed / msPerHour);
      return `${numberToWords(hours)} ${pluralize(hours, 'hour')} ago`;
    } else if (elapsed < msPerMonth) {
      const days = Math.floor(elapsed / msPerDay);
      return `${numberToWords(days)} ${pluralize(days, 'day')} ago`;
    } else if (elapsed < msPerYear) {
      const months = Math.floor(elapsed / msPerMonth);
      return `${numberToWords(months)} ${pluralize(months, 'month')} ago`;
    } else {
      const years = Math.floor(elapsed / msPerYear);
      return `${numberToWords(years)} ${pluralize(years, 'year')} ago`;
    }
  }

  function pluralize(count, word) {
    return count === 1 ? word : word + "s";
  }
  
  function numberToWords(num) {
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  
    if (num < 10) return ones[num];
    if (num > 10 && num < 20) return teens[num - 10];
    if (num % 10 === 0 && num < 100) return tens[num / 10];
    if (num < 100) return tens[Math.floor(num / 10)] + "-" + ones[num % 10];
    if (num < 1000) {
      const hundred = Math.floor(num / 100);
      const rest = num % 100;
      return ones[hundred] + " hundred" + (rest ? " and " + numberToWords(rest) : "");
    }
    if (num < 10000) {
      const thousand = Math.floor(num / 1000);
      const rest = num % 1000;
      const hundredPart = Math.floor(rest / 100);
      const tensPart = rest % 100;
      const and = hundredPart || tensPart ? " and " : "";
      return ones[thousand] + " thousand" + and + (rest ? numberToWords(rest) : "");
    }
  
    return "Number out of range";
  }
  


  const files = commitDetails?.files.map((file) => ({
    title: file.filename,
    content: (
      <div>
        <pre>{file.patch}</pre>
      </div>
    ),
  }));

  return (
    <div className="app">
      {commitDetails ? (
        <div className="commit-details">
          <div className="divOuter" >
            <div className="divSecFir">
              <img src={commitDetails?.author?.avatar_url} alt="profile"></img>
              <div style={{ display: "flex", textAlign: "left" }}>
                <p className="txtHeader">
                  {commitDetails?.commit?.message}
                  <br></br>
                  <span className="txtAuthor">
                    Authored by{" "}
                    <span>
                      <strong>{commitDetails?.commit?.author?.name}</strong>
                    </span>{" "}
                    {getDifferenceInWords(
                      commitDetails?.commit?.committer?.date,
                      new Date()
                    )}
                  </span>
                </p>
              </div>
              <div className="divSecTwo">
                <p className="commitedBy">
                  Commited by <b>{commitDetails?.commit?.committer?.name} </b>
                  {getDifferenceInWords(commitDetails?.commit?.committer?.date,new Date())}
                  <br /> Commit <b>{commitDetails?.commit?.tree?.sha}</b>
                  <br /> Parent{" "}
                  <span className="link-monospace">
                    {" "}
                    <b>{commitDetails?.parents[0]?.sha}</b>
                  </span>
                </p>
              </div>
            </div>

            <div>
              <Accordion items={files} />
            </div>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>
          Error While Fetching The GitCommit API
        </p>
      )}
    </div>
  );
};

export default CommitDetails;
