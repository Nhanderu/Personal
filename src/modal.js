const modal = window['modal'] || document.getElementById('modal')
const modalLink = window['modal-link'] || document.getElementById('modal-link')
const modalCloser = window['modal-closer'] || document.getElementById('modal-closer')

const isModalOpen = () => !!Number(modal.style.opacity)

const closeModal = () => {
    modal.style.opacity = 0
    modal.style.pointerEvents = 'none'
}

const openModal = () => {
    modal.style.opacity = 1
    modal.style.pointerEvents = 'all'
}

window.addEventListener('click', event => {
    if (event.target == modalLink)
        isModalOpen() ? closeModal() : openModal()
    else if (event.target == modalCloser)
        closeModal()
    else if (event.target != modal)
        isModalOpen() && closeModal()
})
