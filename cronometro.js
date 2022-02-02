"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

//Inicia o temporizador
function start() {
    cron = setInterval() => { timer(); }, tempo);
}

//Pausa o temporizador 
function pause() {
    clearInterval(cron);
}

//Limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

//Contagem e exibição do tempo
function timer() {
    ss++; //Adciona +1 na variável ss

    if (ss == 59) { //Verifica os segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica os minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    document.getElementById('counter').innerText = format;

    return format;