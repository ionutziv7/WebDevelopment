var counter = 0;

function increase() {
    counter = counter + 1;
    document.getElementById("btn1").innerHTML = counter;
}

function decrease() {
    if(counter > 0) {
        counter = counter - 1;
    document.getElementById("btn1").innerHTML = counter;
    }
    else if(counter === 0) {
        counter = 0;
    }
    else {
        counter = 0;
    }
}