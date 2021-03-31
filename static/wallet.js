/* global QRCode */

(() => {

    const outputContainer = window['wallet'] || document.getElementById('wallet')
    const walletOutput = window['wallet-address'] || document.getElementById('wallet-address')
    const qrCodeOutput = window['qr-code'] || document.getElementById('qr-code')
    const tooltip = window['clipboard-tooltip'] || document.getElementById('clipboard-tooltip')

    const qrCodeGenerator = new QRCode(qrCodeOutput, {
        text: '',
        width: 210,
        height: 210,
        colorLight: '#fdf4c1',
        colorDark: '#282828'
    })

    const showTooltip = () => {
        tooltip.classList.remove('invisible')
        tooltip.classList.add('visible')
        setTimeout(() => {
            tooltip.classList.add('invisible')
            tooltip.classList.remove('visible')
        }, 1000)
    }

    const clipboardListener = event => {

        const text = event.target.innerText
        if (!navigator.clipboard) {
            console.error(`Error calling clipboard API: Browser has no clipboard API.`)
            return
        }

        navigator.clipboard.writeText(text).then(showTooltip, err => {
            console.error(`Error calling clipboard API: ${err}.`)
        })
    }

    walletOutput.addEventListener('click', clipboardListener)

    const qrCodeListener = event => {

        outputContainer.classList.remove('invisible')
        outputContainer.classList.add('visible')

        const name = event.target.innerText
        const wallet = event.target.getAttribute('data-wallet')
        walletOutput.innerText = wallet
        qrCodeGenerator.makeCode(`${name}:${wallet}`)
    }

    const btns = document.querySelectorAll('[data-wallet]')
    for (const btn of btns) {
        btn.addEventListener('click', qrCodeListener)
    }

})()
