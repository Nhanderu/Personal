const link        = window['btc-link'] || document.getElementById('btc-link')
const modal       = window['btc-modal'] || document.getElementById('btc-modal')
const modalCloser = modal.getElementsByClassName('modal-close')[0]

const pointerEventsByOpacity =
    { 1: 'all'
    , 0: 'none'
    }

link.addEventListener('click', () => {
    modal.style.opacity = Number(!Number(modal.style.opacity))
    modal.style.pointerEvents = pointerEventsByOpacity[modal.style.opacity]
})

modalCloser.addEventListener('click', () => {
    modal.style.opacity = 0
    modal.style.pointerEvents = pointerEventsByOpacity[modal.style.opacity]
})