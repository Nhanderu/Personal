/* global QRCode */

const cryptoButtons = document.querySelectorAll('[data-crypto]')

const qrCodeImage = window['qr-code'] || document.getElementById('qr-code')
const qrCode = new QRCode(qrCodeImage, {
  text: '',
  width: 320,
  height: 320,
  colorLight: '#BBCCAA'
})

const setCrypto = event => {
  for (const button of cryptoButtons) {
    if (button === event.target) {
      event.target.classList.add('button-active')
    } else {
      button.classList.remove('button-active')
    }
  }

  const crypto = event.target.getAttribute('data-crypto')
  const walletAddress = event.target.getAttribute('data-wallet-address')

  document.getElementById('wallet-address').innerText = walletAddress
  qrCode.makeCode(`${crypto}:${walletAddress}`)
}

for (const button of cryptoButtons) {
  button.addEventListener('click', setCrypto)
}

const defaultButton = document.querySelector('[data-crypto="bitcoin"]')
setCrypto({ target: defaultButton })
