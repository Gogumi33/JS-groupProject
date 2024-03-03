const doingBtn = document.getElementById("doing");
const doneBtn = document.getElementById("done");
const underline = document.getElementById("underline");

doingBtn.addEventListener("click", (event) => {
    underline.style.left = doing.offsetLeft + "px";
})
doneBtn.addEventListener("click", (event) => {
    underline.style.left = doneBtn.offsetLeft + "px";
})

function moveUnderLine(event) {
    console.log("event!");
    underline.style.left = doneBtn.offsetLeft + "px";
}