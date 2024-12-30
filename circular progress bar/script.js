let counter = 0;

let setter = setInterval(() => {
    if(counter>=65) {
        
    } else {
        counter += 1;
        document.getElementById("inner").innerHTML=`${counter}%`;
    }
}, 29)