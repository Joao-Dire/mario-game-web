const mario = document.querySelector('.mario') // seleciona a class .mario do HTML para podermos fazer a adição do pulo

const jump = () => {
    mario.classList.add('jump'); //introduz a classe .jump na class .mario para que ele faça a animação de pulo criada no CSS

    setTimeout(() => { //função dentro da função para após adicionado o pulo, ele seja removido, possibilitando que pule mair de 1 vez

        mario.classList.remove('jump'); // remove a class .jump da class .mario

    }, 500) //tempo para o processo ocorrer
}

document.addEventListener('keydown', jump);