const resultEl = document.getElementById("result");
const generateEl = document.getElementById("generate");

let alpha = "abcdefghijklmnopqrsuvwxyz";
let ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "1234567890";
let character = "!@$%&*()_<>?/";

const pass = document.getElementsByTagName("input");

let main = () => {
  let ALPHAVal;
  let alphaVal;
  let numVal;
  let characterVal;
  let password;

  if (pass[1].checked) {
    ALPHAVal = `${ALPHA}`;
  } else {
    ALPHAVal = "";
  }
  if (pass[2].checked) {
    alphaVal = `${alpha}`;
  } else {
    alphaVal = "";
  }
  if (pass[3].checked) {
    numVal = `${num}`;
  } else {
    numVal = "";
  }
  if (pass[4].checked) {
    characterVal = `${character}`;
  } else {
    characterVal = "";
  }

  password = `${ALPHAVal}${alphaVal}${numVal}${characterVal}`;

  const passwordGenerator = () => {
    let yourPassword = "";
    for (i = 0; i < pass[0].value; i++) {
      yourPassword =
        yourPassword + password[Math.floor(Math.random() * password.length)];
    }
    resultEl.innerText = yourPassword;

    var copyText = document.querySelector("button");
    copyText.addEventListener("click", () => {
      navigator.clipboard.writeText(yourPassword);
    });
    console.log(yourPassword);
  };
  passwordGenerator();
};

generateEl.addEventListener("click", main);
