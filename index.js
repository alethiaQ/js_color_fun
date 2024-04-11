const body = document.body;
let div = document.createElement('div');
div.id = "matrixDiv";
body.appendChild(div);

let rows = 15;
let cols = 25;
let html_str = '';
let matrix = [];

for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let s = 0; s < cols; s++) {
        matrix[i][s] = i;
        html_str += ` <span class=square id=${i+s}> </span>  `;
    };
    html_str += "<br>";
};

document.getElementById("matrixDiv").innerHTML = html_str;

