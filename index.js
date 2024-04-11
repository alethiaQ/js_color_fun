const body = document.body;
let div = document.createElement('div');
div.id = "matrixDiv";
body.appendChild(div);

let box_amount = 8;
let y = 5;
let html_str = '';
let matrix = [];

for (let i = 0; i < box_amount; i++) {
    matrix[i] = [];
    for (let s = 0; s < y; s++) {
        matrix[i][s] = i;
        html_str += " <span class=square> </span>  ";
    };
    html_str += "<br>";
};

document.getElementById("matrixDiv").innerHTML = html_str;

