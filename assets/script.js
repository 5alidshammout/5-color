const btn = document.querySelector("button");
const output = document.querySelector(".output");
const bdy = document.querySelector("body");
let color;

function generateColor() {
    c = chroma.random();
    output.innerText = c;
    bdy.style.backgroundColor = c;
    console.log(`%c███████\n${c}`, `font-size:50px;color:${c}`);
    if (chroma.contrast(`${c}`, "black") < 4.5) {
        bdy.style.color = "white";
        btn.style.color = "white";
    } else {
        bdy.style.color = "black";
        btn.style.color = "black";
    }
}

btn.onclick = generateColor;

bdy.onkeyup = (e) => {
    if (e.keyCode == 32) {
        generateColor();
    }
};
