const
    allZoneEl = document.getElementById("allzone"),
    currentTimeEl = document.getElementById("currentTime"),
    allZoneInput = document.getElementById("exampleDataList")

let defultInterval = setInterval(() => currentTimeEl.innerText = new Date().toLocaleString('en-us', { timeStyle: 'full' }), 1000)

fetch('worldclock.json')
    .then(res => res.json())
    .then(data => {
        data.map(e => {
            const option = document.createElement('option')
            option.innerText = e.timezone
            allZoneEl.appendChild(option)
        })
    })
    .catch(err => console.log(err))

allZoneInput.oninput = () => setInterval(() => time(), 1000)

function time() {
    // console.log(allZoneInput.value);
    const ctime = new Date().toLocaleString('en-us', { timeZone: allZoneInput.value, timeStyle: 'full' })

    currentTimeEl.innerText = ctime
    clearInterval(defultInterval)
}
