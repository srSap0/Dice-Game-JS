document.addEventListener('DOMContentLoaded' , () =>{

    const dado1 = document.getElementById('dado1');
    const dado2 = document.getElementById('dado2');

    const imagenesDados = [ 'dice1.png', 
        'dice2.png', 'dice3.png', 
        'dice4.png', 'dice5.png', 
        'dice6.png' ];
    
        const lanzarDados = ()=> {
            const numero1 = Math.floor(Math.random()*6);
            const numero2 = Math.floor(Math.random()*6);

            if (numero1 > numero2){
                titulo.textContent = "Felicidades!! Player 1 :)";
                titulo.style.color = "yellow";
                titulo.style.fontSize = "10rem";
            }
             else  if  (numero1 < numero2){
                titulo.textContent = "Felicidades!! Player 2 :)";
                titulo.style.color ="red";
                titulo.style.fontSize = "10rem";
            }
             else {
                titulo.textContent = "EmPaTe!!! :/";
                titulo.style.backgroundColor = " red";
                titulo.style.color = "blue";
                titulo.style.fontSize = "3rem";
            }

            dado1.src = imagenesDados[numero1];
            dado2.src = imagenesDados[
numero2  ];
        };

        lanzarDados();
        
});