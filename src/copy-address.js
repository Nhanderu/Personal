const showClipboardMessage = () => {
  const tooltip = window['clipboard-tooltip'] || document.getElementById('clipboard-tooltip')

  tooltip.classList.remove('tooltip')
  tooltip.classList.add('active-tooltip')

  setTimeout(() => {
    tooltip.classList.add('tooltip')
    tooltip.classList.remove('active-tooltip')
  }, 2000)
}

const copyToClipboardFallback = text => {
  const fakeInput = document.createElement('textarea')
  fakeInput.value = text
  fakeInput.style.top = '0'
  fakeInput.style.left = '0'
  fakeInput.style.position = 'fixed'

  document.body.appendChild(fakeInput)
  fakeInput.focus()
  fakeInput.select()

  try {
    document.execCommand('copy') ? showClipboardMessage() : console.error('Error executing copy command.')
  } catch (err) {
    console.error(`Error executing copy command: ${err}.`)
  }

  document.body.removeChild(fakeInput)
}

const copyToClipboard = text => {
  if (!navigator.clipboard) {
    copyToClipboardFallback(text)
    return
  }

  navigator.clipboard.writeText(text).then(showClipboardMessage, err => {
    console.error(`Async error calling clipboard API: ${err}.`)
  })
}

const walletAddress = window['wallet-address'] || document.getElementById('wallet-address')
walletAddress.addEventListener('click', event => copyToClipboard(event.target.innerText))
