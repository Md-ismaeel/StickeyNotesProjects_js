let boxInput = document.querySelector(".input").children;
let btn = document.querySelector("#Btn");
let newDiv = document.querySelector(".para");

btn.addEventListener("click", () => {
  let textValue = boxInput[0].value;
  let colorValue = boxInput[1].children[1].value;
  // console.log(textValue);
  // console.log(colorValue);
  if (textValue === "") {
    alert("Please enter some text");
    return;
  }
  stickeyNots(textValue, colorValue);
  boxInput[0].value = "";
  document.querySelector(".pTag").style.display = "none";

  removeStickeyNoteOfx();
});

function stickeyNots(text, color) {
  let div = document.createElement("div");
  div.innerHTML = `<p> ${text} </p> <button class=Btn2>X</button>`;
  div.style.backgroundColor = color;
  newDiv.appendChild(div);
}

function removeStickeyNoteOfx() {
  newDiv.addEventListener("click", (e) => {
    if (e.target.innerText === "X") {
      e.target.parentElement.remove();
    }
    if (newDiv.innerHTML === "") {
      document.querySelector(".pTag").style.display = "block";
    } else {
      document.querySelector(".pTag").style.display = "none";
    }
  });
}
