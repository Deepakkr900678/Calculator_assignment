function clearScreen() {
    document.getElementById("result").value = "";
}
function button(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    let a = document.getElementById("result").value;
    let b = eval(a);
    document.getElementById("result").value = b;
}