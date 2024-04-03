


const btnAbrirModal = document.querySelector(btn-abrir-myModal);
const btnCerrarModal = document.querySelector(btn-cerrar-myModal);
const myModal = document.querySelector("#myModal");

btnAbrirModal.addEventListener('click', () => {
    myModal.showmyModal();
})

btnCerrarModal.addEventListener('click', () => {
    myModal.close();
})
