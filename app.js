function suma(a,b){
    a = a^2;
    b = b^2;

    if(a === 10 && b === 30) {
        a = "Hola";
        b = " Mundo"
        return a+b;
    }
    else {
        return a+b;
    }
}

module.exports = suma;