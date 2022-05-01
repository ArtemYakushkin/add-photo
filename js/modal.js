// const modalLinks = document.querySelectorAll('.modal-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-padding');

// let unlock = true;

// const timeout = 800;

// if (modalLinks.lingth > 0) {
//     for (let index = 0; index < modalLink.lingth; index++) {
//         const modalLink = modalLinks[index];
//         modalLink.addEventListener("click", function (e) {
//             const modalName = modalLink.getAttribute('href').replace('#', '');
//             const currentModal = document.getElementById(modalName);
//             modalOpen(currentModal);
//             e.preventDefault();
//         });
//     }
// }

// const modalCloseIcon = document.querySelectorAll('.close-modal');

// if (modalCloseIcon.length > 0) {
//     for (let index = 0; index < modalCloseIcon.length; index++) {
//         const el = modalCloseIcon[index];
//         el.addEventListener('click', function (e) {
//             modalCloseIcon(el.closest('.modal'));
//             e.preventDefault();
//         });
//     }
// }

// function modalOpen(curentModal) {
//     if (curentModal && unlock) {
//         const modalActive = document.querySelector('.modal.open');
//         if (modalActive) {
//             modalClose(modalActive, false);
//         } else {
//             bodyLock();
//         }
//         curentModal.classList.add('open');
//         curentModal.addEventListener("click", function (e) {
//             if (!e.target.closest('.modal__block')) {
//                 modalClose(e.target.closest('.modal'));
//             }
//         });
//     }
// }

// function modalClose(modalActive, doUnlock = true) {
//     if (unlock) {
//         modalActive.classList.remove('open');
//         if (doUnlock) {
//             bodyUnLock();
//         }
//     }
// }

// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
//     for (let index = 0; index < lockPadding.length; index++) {
//         const el = lockPadding[index];
//         el.style.paddingRight = lockPaddingValue;
//     }
//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');
    
//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

// function bodyUnLock() {
//     setTimeout(function () {
//         for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = '0px';
//         }
//         body.style.paddingRight = '0px';
//         body.classList.remove('lock');
//     }, timeout);
    
//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }


// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

const modal = document.getElementById('modal');
const btn = document.getElementById('modal-open');
const btnX = document.getElementsByClassName("modal__btn-close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

btnX.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
 if (event.target == modal) {
    modal.style.display = "none";
 }
}