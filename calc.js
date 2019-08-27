function setValue() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    c = Number(document.getElementById("c").value);
}
// SUMMATION FUNCTION

function sum() {
    setValue()
    var result = 0;
    if (a && !b && !c) {
        result = a;
        alert(result);
    } else if (b && !a && !c) {
        result = b;
        alert(result)
    } else if (c && !a && !b) {
        result = c;
        alert(result)
    } else if (a && b && !c) {
        result = a + b;
        alert(result);
    } else if (a && c && !b) {
        result = a + c;
        alert(result);
    } else if (b && c && !a) {
        result = b + c;
        alert(result);
    } else if (a && b && c) {
        result = a + b + c
        alert(result);
    } else {
        alert(" please enter a value")
    }
}
//SUBTRACTION FUNCTION

function rest() {
    setValue()
    var result = 0;
    if (a && !b && !c) {
        result = a;
        alert(result);
    } else if (b && !a && !c) {
        result = b;
        alert(result)
    } else if (c && !a && !b) {
        result = c;
        alert(result)
    } else if (a && b && !c) {
        result = a - b;
        alert(result);
    } else if (a && c && !b) {
        result = a - c;
        alert(result);
    } else if (b && c && !a) {
        result = b - c;
        alert(result);
    } else if (a && b && c) {
        result = a + b - c
        alert(result);
    } else {
        alert(" please enter a value")
    }
}
//MULTIPLICTION FUNCTION

function multi() {
    setValue()
    var result = 0;
    if (a && !b && !c) {
        result = a;
        alert(result);
    } else if (b && !a & !c) {
        result = b;
        alert(result)
    } else if (c && !a && !b) {
        result = c;
        alert(result)
    } else if (a && b && !c) {
        result = a * b;
        alert(result);
    } else if (a && c && !b) {
        result = a * c;
        alert(result);
    } else if (b && c && !a) {
        result = b * c;
        alert(result);
    } else if (a && b && c) {
        result = a * b * c
        alert(result);
    } else {
        alert("please enter a value")
    }
}
// DIVISION FUNCTION

function div() {
    setValue()
    var result = 0;
    if (a && !b && !c) {
        result = a;
        alert(result);
    } else if (b && !a && !c) {
        result = b;
        alert(result)
    } else if (c && !a && !b) {
        result = c;
        alert(result)
    } else if (a && b && !c) {
        result = a / b;
        alert(result);
    } else if (a && c && !b) {
        result = a / c;
        alert(result);
    } else if (b && c && !a) {
        result = b / c;
        alert(result);
    } else if (a && b && c) {
        result = (a + b) / c
        alert(result);
    } else {
        alert("please enter a value")
    }
}