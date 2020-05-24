const link         = window['btc-link'] || document.getElementById('btc-link')
const modal        = window['btc-modal'] || document.getElementById('btc-modal')
const modalClosers = modal.getElementsByClassName('modal-close')

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
    if (event.target == link)
        isModalOpen() ? closeModal() : openModal()
    else if (event.target != modal)
        isModalOpen() && closeModal()
})

for (const modalCloser of modalClosers)
    modalCloser.addEventListener('click', closeModal)
