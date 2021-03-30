(() => {

    const tooltip = window['clipboard-tooltip'] || document.getElementById('clipboard-tooltip')
    const showMsg = () => {
        tooltip.classList.remove('invisible')
        tooltip.classList.add('visible')
        setTimeout(() => {
            tooltip.classList.add('invisible')
            tooltip.classList.remove('visible')
        }, 1000)
    }

    const listener = event => {

        const text = event.target.innerText
        if (!navigator.clipboard) {
            console.error(`Error calling clipboard API: Browser has no clipboard API.`)
            return
        }

        navigator.clipboard.writeText(text).then(showMsg, err => {
            console.error(`Error calling clipboard API: ${err}.`)
        })
    }

    const walletAddress = window['wallet-address'] || document.getElementById('wallet-address')
    walletAddress.addEventListener('click', listener)

})()