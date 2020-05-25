const modal = window['modal'] || document.getElementById('modal')
const modalLink = window['modal-link'] || document.getElementById('modal-link')
const modalCloser = window['modal-closer'] || document.getElementById('modal-closer')
const modalBackground = window['modal-background'] || document.getElementById('modal-background')

const isModalOpen = () => !!Number(modal.style.opacity)

const closeModal = () => {
    modal.style.opacity = 0
    modal.style.pointerEvents = 'none'
    modalBackground.style.opacity = 0
    modalBackground.style.pointerEvents = 'none'
}

const openModal = () => {
    modal.style.opacity = 1
    modal.style.pointerEvents = 'all'
    modalBackground.style.opacity = 1
    modalBackground.style.pointerEvents = 'all'
}

modalLink.addEventListener('click', () => isModalOpen() ? closeModal() : openModal())
modalCloser.addEventListener('click', closeModal)
modalBackground.addEventListener('click', closeModal)

closeModal()
