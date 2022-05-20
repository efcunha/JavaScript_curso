function teste1(num) {
    if (num > 7)
        console.log(num); // imprime 8
    console.log('Final'); // Não vai ser executado
}

teste1(6); // Não vai ser executado
teste1(8); // imprime 8

function teste2(num) {
    if (num > 7); { // Cuidado com ponto e virgula (;), não usar com as estruturas de controle
        console.log(num); 
    }
}

teste2(6); 
teste2(8);  

