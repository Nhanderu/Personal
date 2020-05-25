const modal = window['modal'] || document.getElementById('modal')
const modalLink = window['modal-link'] || document.getElementById('modal-link')
const modalCloser = window['modal-closer'] || document.getElementById('modal-closer')
const modalBackground = window['modal-background'] || document.getElementById('modal-background')

const isModalOpen = () => !!Number(modal.style.opacity)

const closeModal = () => {
    modal.classList.add('tooltip')
    modal.classList.remove('active-tooltip')
    modalBackground.classList.add('tooltip')
    modalBackground.classList.remove('active-tooltip')
}

const openModal = () => {
    modal.classList.remove('tooltip')
    modal.classList.add('active-tooltip')
    modalBackground.classList.remove('tooltip')
    modalBackground.classList.add('active-tooltip')
}

modalLink.addEventListener('click', () => isModalOpen() ? closeModal() : openModal())
modalCloser.addEventListener('click', closeModal)
modalBackground.addEventListener('click', closeModal)

closeModal()
