const box = document.getElementById('box');

const modal = document.getElementById('modal');

const modal2 = document.getElementById('modal2');

const modal3 = document.getElementById('modal3');

const modal4 = document.getElementById('modal4');

const modal5 = document.getElementById('modal5');

const elementos = document.getElementById('elementos');

const elementos2 = document.getElementById('elementos2');

const elementos3 = document.getElementById('elementos3');

const elementos4 = document.getElementById('elementos4');

const elementos5 = document.getElementById('elementos5');

box.addEventListener('click', () => {

        box.classList.toggle('moved');

        elementos.classList.toggle('surgir');

        elementos2.classList.toggle('surgir');

        elementos3.classList.toggle('surgir');

        elementos4.classList.toggle('surgir');

        elementos5.classList.toggle('surgir');

});

const abrirModal = () => {
        modal.classList.remove('hidden');
};

const abrirModal2 = () => {
        modal2.classList.remove('hidden2');
};

const abrirModal3 = () => {
        modal3.classList.remove('hidden3');
};

const abrirModal4 = () => {
        modal4.classList.remove('hidden4');
};

const abrirModal5 = () => {
        modal5.classList.remove('hidden5');
};

elementos.addEventListener('click', abrirModal);
elementos2.addEventListener('click', abrirModal2);
elementos3.addEventListener('click', abrirModal3);
elementos4.addEventListener('click', abrirModal4);
elementos5.addEventListener('click', abrirModal5);

modal.addEventListener('click', (event) => {
        if (event.target === modal) {  // Verifica se o clique foi no fundo
                modal.classList.add('hidden');
        }
});

modal2.addEventListener('click', (event) => {
        if (event.target === modal2) {  // Verifica se o clique foi no fundo
                modal2.classList.add('hidden2');
        }
});

modal3.addEventListener('click', (event) => {
        if (event.target === modal3) {  // Verifica se o clique foi no fundo
                modal3.classList.add('hidden3');
        }
});

modal4.addEventListener('click', (event) => {
        if (event.target === modal4) {  // Verifica se o clique foi no fundo
                modal4.classList.add('hidden4');
        }
});

modal5.addEventListener('click', (event) => {
        if (event.target === modal5) {  // Verifica se o clique foi no fundo
                modal5.classList.add('hidden5');
        }
});

document.getElementById('modal-content').addEventListener('click', (event) => {
        event.stopPropagation();  // Impede o fechamento do modal
});

document.getElementById('modal-content2').addEventListener('click', (event) => {
        event.stopPropagation();  // Impede o fechamento do modal
});

document.getElementById('modal-content3').addEventListener('click', (event) => {
        event.stopPropagation();  // Impede o fechamento do modal
});

document.getElementById('modal-content4').addEventListener('click', (event) => {
        event.stopPropagation();  // Impede o fechamento do modal
});

document.getElementById('modal-content5').addEventListener('click', (event) => {
        event.stopPropagation();  // Impede o fechamento do modal
});