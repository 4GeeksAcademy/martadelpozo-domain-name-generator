/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronouns = ["the", "our", "you", "we", "me"];
let adjectives = ["great", "happy", "wonderful", "delicious", "peaceful"];
let nouns = ["jogger", "raccoon", "dog", "coffee", "flower"];
let extensions = [".com", ".org", ".net", ".gov", ".edu"];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < extensions.length; l++) {
        let domainName = pronouns[i] + adjectives[j] + nouns[k] + extensions[l];
        console.log(domainName);
      }
    }
  }
}
