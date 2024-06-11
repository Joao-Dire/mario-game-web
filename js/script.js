const mario = document.querySelector('.mario') // seleciona a class .mario do HTML para podermos fazer a adição do pulo
const pipe = document.querySelector('.pipe') // seleciona a class .pipe do HTML

const jump = () => {
    mario.classList.add('jump'); //introduz a classe .jump na class .mario para que ele faça a animação de pulo criada no CSS

    setTimeout(() => { //função dentro da função para após adicionado o pulo, ele seja removido, possibilitando que pule mair de 1 vez

        mario.classList.remove('jump'); // remove a class .jump da class .mario

    }, 500) //tempo para o processo ocorrer
}

const loop = setInterval(() => {
    

    const pipePosition = pipe.offsetLeft; //pega a posição do cano
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //acessa a posição do mario no bottom e muda ela de string para um valor

    console.log(marioPosition);

    if (pipePosition <= 115 && pipePosition > 0 && marioPosition < 80) { //se o deslocamento do cano chegou as 115px & a posição é maior que 0 & a altura do mario é maior que 80 
       
        pipe.style.animation = 'none'; //cancela a animação do cano ao atingir os 120px
        pipe.style.left = `${pipePosition}px`; //permanece o cano aos 120px 

        mario.style.animation = 'none'; //cancela a animação do cano ao atingir os 120px
        mario.style.bottom = `${marioPosition}px`; //permanece o cano aos 120px 

        mario.src = '../img/game-over.png' //apos o jogo acabar, da replace na imagem do mario
        mario.style.width = '75px';
        mario.style.marginLeft = '50px' //diminuir o tamanho do mario

        clearInterval(loop)
    }
}, 10);

document.addEventListener('keydown', jump);//quando pressionar a tecla, aciona a função