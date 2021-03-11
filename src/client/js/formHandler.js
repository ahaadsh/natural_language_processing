//import { response } from "express";
//import { valid_Url } from "./validUrl";

const fetch = require("node-fetch");

//" It was based on some codes found in Udacity"
function handleSubmit(enent) {
  enent.preventDefault();
  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  if (Client.valid_Url(formText)) {
    fetch("http://localhost:8081/route", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      }, // 'Content-Type': 'application/x-www-form-urlencoded',
      body: JSON.stringify({ formText: formText }),
    });
 
  then((request) => request.json()).then(function (info) {
    document.getElementById(
      "Subjectivity"
    ).innerHTML = `Subjectivity is = ${info.subjectivity}`;
    document.getElementById(
      "Agreement"
    ).innerHTML = `Agreement is =${info.agreement}`;
    document.getElementById(
      "Score_tag"
    ).innerHTML = `Score_tag is =${info.score_tag}`;
    document.getElementById("Irony").innerHTML = `Irony is = ${info.irony}`;
    document.getElementById(
      "Confidence"
    ).innerHTML = `Confidence is = ${info.confidence}`;
    console.log(info);
  });

 } else {
    console.log("----- Not a URI , TRY AGIAN -----");
  }

}
export { handleSubmit };
