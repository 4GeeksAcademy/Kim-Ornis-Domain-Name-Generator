/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["KO", "Kimbo"];
  let adj = ["Amazing", "Effecient"];
  let noun = ["Coder", "Accountant"];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        let ranDo = document.createElement("ranDo");
        ranDo.innerText = `${pronoun[a]}${adj[b]}${noun[c]}.com`;

        console.log(ranDo);
        document.body.appendChild(ranDo);
      }
    }
  }
};
