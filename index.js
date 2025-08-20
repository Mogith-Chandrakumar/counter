const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const increasebtn = document.getElementById("increase");
const countleble = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function(){
    count++;
    countleble.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    countleble.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    countleble.textContent = count;
}