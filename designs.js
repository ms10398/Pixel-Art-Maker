// Select color input
var table = document.getElementById("pixel_canvas");
var sub = document.getElementById("input_submit");

sub.addEventListener('click', function (e) {
    e.preventDefault();
    makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {

    table.innerHTML = '';
    var h = document.getElementById("input_height").value;
	var w = document.getElementById("input_width").value;
	var color = document.getElementById("colorPicker");
    let addColor = function (cell) {
        cell.addEventListener('click', function () {
            cell.style.backgroundColor = color.value;
        });
    }

    for (let i = 0; i < h; i++) {
        let row = table.insertRow(i);
        for (var j = 0; j < w; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addColor(cell));
        }
    }
}
