const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;

    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 

    if (resto>=10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    
    return flujo;
}

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').valueAsNumber
    //validamos que se cargue un dato:
    if (DATO > 0 && DATO <=30){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }else if (DATO>30){
        let SuperficieCorporal = ( (DATO * 4) + 7) / (DATO + 90);
        FLU.innerHTML = SuperficieCorporal*1500 + ' cc/hr';
        MAN.innerHTML = SuperficieCorporal*2000 + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
     else {
    
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})



