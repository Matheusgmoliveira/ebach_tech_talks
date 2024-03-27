AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampeDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampeDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60; 
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const HorasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000 );

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${HorasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`


    if(distanciaAteOEvento < 0 ){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML ='Evento expirado'
    }
},1000); 