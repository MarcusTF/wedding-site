const theDay = Date.UTC(2021, 2, 27, 17)
const displayStream = Date.UTC(2021, 2, 27, 16)
let display = false
const gifts = document.getElementById('gifts')

countdownTimer = setInterval(() => {
  console.log(displayStream, Date.now())

  const now = Date.now()
  var distance = theDay - now
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById('countdown').innerHTML =
    days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's'

  if (distance < 0) {
    clearInterval(countdownTimer)
    document.getElementById('countdown').innerHTML =
      '<a href="https://twitch.tv/thebestparts" id="twitch-button">Twitch.tv/thebestparts</a>'
  }
}, 1000)

dci = setInterval(() => {
  Date.now() >= displayStream ? (display = true) : (display = false)
  if (display) {
    document.getElementById('stream').appendChild(gifts)
    gifts.style.position = 'absolute'
    gifts.style.top = '1em'
    gifts.style.right = '1em'
    document.getElementById('stream').hidden = false
    const test = new Twitch.Embed('stream', {
      width: '100%',
      height: '100%',
      layout: 'video',
      video: '965259920',
    })
    document.getElementById('info').style.display = 'none'
    clearInterval(dci)
    clearInterval(countdownTimer)
  } else {
    document.getElementById('stream').hidden = true
  }
}, 1000)
