const color = document.getElementById("color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

document.getElementById("btn").addEventListener("click", () => {

    let bgcolor = "#";
    for(i = 0; i <= 5; i++) {
        let random = () => {
            return Math.floor(Math.random() * hex.length);
        };
        bgcolor += hex[random()];
    };
    color.textContent = bgcolor;
    document.body.style.backgroundColor = bgcolor;

});