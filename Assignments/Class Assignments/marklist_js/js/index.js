//get values

function getValues() {
    var obj = new Object();
    var name = document.getElementById('username').value;
    var regno = document.getElementById('regno').value;
    var sem = document.getElementById('sem').value;

    var s1name = document.getElementById('s1name').value;
    var s1mark = document.getElementById('s1mark').value;
    var s1total = document.getElementById('s1total').value;

    var s2name = document.getElementById('s2name').value;
    var s2mark = document.getElementById('s2mark').value;
    var s2total = document.getElementById('s2total').value;

    var s3name = document.getElementById('s3name').value;
    var s3mark = document.getElementById('s3mark').value;
    var s3total = document.getElementById('s3total').value;

    var s4name = document.getElementById('s4name').value;
    var s4mark = document.getElementById('s4mark').value;
    var s4total = document.getElementById('s4total').value;

    obj["name"] = name;
    obj["regno"] = regno;
    obj["sem"] = sem;
    obj['subjects'] = new Array();
    obj['subjects'].push(new Object({"subname": s1name, "submark": s1mark, "subtotal": s1total}));
    obj['subjects'].push(new Object({"subname": s2name, "submark": s2mark, "subtotal": s2total}));
    obj['subjects'].push(new Object({"subname": s3name, "submark": s3mark, "subtotal": s3total}));
    obj['subjects'].push(new Object({"subname": s4name, "submark": s4mark, "subtotal": s4total}));
    return obj;
}

// check custom checkValidation
function checkValidation() {
    console.log("checkValidation");
    var values = getValues();
    
    submitForm();
}

function calculateGrade(percent) {
    if (100 >= percent && percent >= 95) {
        return 'S';
    } else if (95 > percent && percent >= 90) {
        return 'A+';
    } else if (90 > percent && percent >= 85) {
        return 'A';
    } else if (85 > percent && percent >= 80) {
        return 'B+';
    } else if (80 > percent && percent >= 75) {
        return 'B';
    } else if (75 > percent && percent >= 70) {
        return 'C+';
    } else if (70 > percent && percent >= 65) {
        return 'C';
    } else if (65 > percent && percent >= 60) {
        return 'D+';
    } else if (60 > percent && percent >= 55) {
        return 'D';
    } else if (55 > percent && percent >= 50) {
        return 'E';
    } else if (percent < 50) {
        return 'F';
    } else {
        return 'Invalid';
    }

}

function generate_table(marks) {
    // creates a <table> element and a <tbody> element
    var tbl = document.getElementById("result-table");
    var tblBody = document.getElementById("result-table-tbody");
    var semstatus = "Pass"
    // creating all cells
    // for (var i = 0; i < marks.length; i++) {
    //     var name = marks[i]["subname"];
    //     var mark = parseFloat(marks[i]["submark"]);
    //     var total = parseFloat(marks[i]["subtotal"]);
    //      creates a table row
    //     var row = document.createElement("tr");
    //
    //     var cell = document.createElement("td");
    //     var cellText = document.createTextNode(name);
    //     cell.appendChild(cellText);
    //     row.appendChild(cell);
    //
    //     var cell = document.createElement("td");
    //     var cellText = document.createTextNode(mark);
    //     cell.appendChild(cellText);
    //     row.appendChild(cell);
    //
    //     var cell = document.createElement("td");
    //     var cellText = document.createTextNode(total);
    //     cell.appendChild(cellText);
    //     row.appendChild(cell);
    //
    //     var cell = document.createElement("td");
    //     var percent = (mark / total) * 100;
    //     var currentGrade = calculateGrade(percent);
    //     if (currentGrade==='F') {
    //         semstatus = "Failed"
    //     }
    //     var cellText = document.createTextNode(currentGrade);
    //     cell.appendChild(cellText);
    //     row.appendChild(cell);
    //
    //      for (var j = 0; j < 4; j++) {
    //           Create a <td> element and a text node, make the text
    //           node the contents of the <td>, and put the <td> at
    //           the end of the table row
    //          var cell = document.createElement("td");
    //          var cellText = document.createTextNode("cell in row " + i + ", column " + j);
    //          cell.appendChild(cellText);
    //          row.appendChild(cell);
    //      }
    //
    //      add the row to the end of the table body
    //     tblBody.appendChild(row);
    // }
    //
    //  put the <tbody> in the <table>
    // tbl.appendChild(tblBody);
    //  appends <table> into <body>
    // body.appendChild(tbl);

    for (var i = 0, row; row = tblBody.rows[i]; i++) {
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop

        var name = marks[i]["subname"];
        var mark = parseFloat(marks[i]["submark"]);
        var total = parseFloat(marks[i]["subtotal"]);
        var percent = (mark / total) * 100;
        var currentGrade = calculateGrade(percent);
        if (currentGrade === 'F') {
            semstatus = "Failed"
        }

        tblBody.rows[i].cells[0].textContent = name;
        tblBody.rows[i].cells[1].textContent = mark;
        tblBody.rows[i].cells[2].textContent = total;
        tblBody.rows[i].cells[3].textContent = currentGrade;
    }

    var status = document.getElementById('out_status');
    status.textContent = semstatus;
    if (semstatus === "Failed") {
        status.classList.add("text-danger");
        status.classList.remove("text-success");
    } else {
        status.classList.remove("text-danger");
        status.classList.add("text-success");
    }
}

function submitForm() {
    console.log("Submit Form");
    var resultBlock = document.getElementById("result-block");
    console.log("res block"+resultBlock.style.display);
    if (resultBlock.style.display === "none" || resultBlock.style.display === "") {
        console.log("Submit if ");
        resultBlock.style.display = "block";
    }

    var name = document.getElementById('username').value;
    var regno = document.getElementById('regno').value;
    var sem_id = document.getElementById('sem');
    var sem = sem_id.options[sem_id.selectedIndex].text;
    if (name != null && name.length > 0) {
        document.getElementById('out_name').textContent = name;
    }
    if (regno != null && regno.length > 0) {
        document.getElementById('out_regno').textContent = regno;
    }
    if (sem != null && sem.length > 0) {
        document.getElementById('out_sem').textContent = sem;
    }
    // if (regno != null && regno.length >0) {
    //     document.getElementById('out_sem') = regno;
    // }
    // if (sem != null && sem.length >0) {
    //     document.getElementById('out_sem') = sem;
    // }
    //
    var values = getValues();
    generate_table(values["subjects"]);

    // var resultBlock = document.getElementById("result-block");
    // if (resultBlock.style.display === "none") {
    //     resultBlock.style.display = "block";
    // } else {
    //     resultBlock.style.display = "none";
    // }
}
