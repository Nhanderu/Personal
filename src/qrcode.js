/* global QRCode */

(() => {

    const divOutput = window['wallet'] || document.getElementById('wallet')
    const codeOutput = window['qr-code'] || document.getElementById('qr-code')
    const generator = new QRCode(codeOutput, {
        text: '',
        width: 320,
        height: 320,
        colorLight: '#fdf4c1',
        colorDark: '#282828'
    })

    const walletOutput = window['wallet-address'] || document.getElementById('wallet-address')
    const listener = event => {

        divOutput.classList.remove('invisible')
        divOutput.classList.add('visible')

        const name = event.target.innerText
        const wallet = event.target.getAttribute('data-wallet')
        walletOutput.innerText = wallet
        generator.makeCode(`${name}:${wallet}`)
    }

    const btns = document.querySelectorAll('[data-wallet]')
    for (const btn of btns) {
        btn.addEventListener('click', listener)
    }

})()
