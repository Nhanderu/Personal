(() => {

    const msToYears = ms => ms / (1000 * 60 * 60 * 24 * (365 + 365 + 365 + 366) / 4)
    const ms = new Date() - new Date(1996, 6, 27)
    const years = Math.floor(msToYears(ms))

    const output = window['age-text'] || document.getElementById('age-text')
    output.innerText = ` ${years} `

})()