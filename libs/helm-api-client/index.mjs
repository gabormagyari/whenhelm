const watchIds = {
  Vanuatu: 1,
  'Vanuatu Titanium': 4,
  Khuraburi: 2,
  'Khuraburi Titanium': 6,
  Komodo: 3,
  Miyako: 5,
}

const [,,email] = process.argv

for (const watch in watchIds) {
    const response = await fetch(`https://helmwatches.com/api.php?sheet=${watchIds[watch]}&email=${email}`)
    console.log(`${watch}: ${await response.text()}`)
}
