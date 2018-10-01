function calulatePrime(a_array) {
    var i;
    var flag = 0;
    for (i = 2; i <= a_array[0] / 2; i++) {
        if (a_array[0] % i == 0) {
            flag = 1;
            break;
        }
    }
    if (a_array[0] == 1) {
        return "1 is neither a prime nor a composite number.";
    } else {
        if (flag == 0) {
            return "Prime";
        } else {
            return "Not Prime";
        }
    }
}

function mostFrequent(a_array) {
    var sort_array = a_array.sort(function (a, b) { return a - b });
    var curr_rep_count = 1;
    var iter_number = sort_array[0];
    var curr_max_rep = 0;

    var curr_max_num = sort_array[0];
    for (var i = 1; i < sort_array.length; i++) {
        if (iter_number != sort_array[i]) {//order change
            curr_rep_count = 1;
            iter_number = sort_array[i];
        } else {
            curr_rep_count += 1;
        }
        if (curr_rep_count > curr_max_rep) {
            curr_max_rep = curr_rep_count;
            curr_max_num = iter_number;
        }
    }
    if (curr_max_rep != 0) {
        return curr_max_rep;
    } else {
        return curr_rep_count;
    }
}


function changeCase(a_string) {
    var output = "";
    for (let i = 0; i < a_string.length; i++) {
        if (a_string[i] == a_string[i].toUpperCase()) {
            output = output+a_string[i].toLowerCase();
        } else if(a_string[i] == a_string[i].toLowerCase()) {
            output = output+a_string[i].toUpperCase();
        }        
    }
    return output;
    
}

// sum of squares
function sumofSquares(a_array) {
    var output = 0;
    for (let i = 0; i < a_array.length; i++) {
        output += a_array[i]**2;
    }
    return output;
}

// odd or even
function oddevenCheck() {
    for (let i = 0; i <=15; i++) {
        if (i%2 == 0) {
            console.log("Even");
        } else {
            console.log("Odd");
        }
    }
}

//truncate 
function truncateString(n, a_string) {
    return a_string.substring(0,n);
}

//findLarge

function findLarge(a, b) {
    if (a>b) {
        return a;
    }
    return b;
}

function printJs(a_string) {
    for (let i = 0; i < a_string.length; i++) {
        for (let j = 0; j < i+1; j++) {
            document.write(a_string[j]);
        }
        document.write('<br />');
        
    }
}

function printStar(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i+1; j++) {
            document.write("*");
        }
        document.write('<br />');
        
    }
}

function startFunction() {
    printStar(4);
    //console.log();
     
    // oddevenCheck(); 
    // var a_array = new Array(2,3,4);
    // console.log(sumofSquares(a_array));
    // var a_string = "The Quick";
    // console.log(changeCase(a_string));

}