import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ ππ½ πΏπ°πΈπ, π΄πΉπ΄πΌπΏπ»πΎ ${usedPrefix + command} Mexico*`
let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.confirmed) throw 'PaΓ­s?'
if (json.confirmed) m.reply(`
β­βββββΒ°.β‘.Β°β§βββββ
ββ«·α­andy-Κα΄α΄-α΄α΄οΉβ
βπ PaΓ­s : ${text}
ββConfirmado : ${json.confirmed.value}
βπcurado : ${json.recovered.value}
ββ οΈMuertes : ${json.deaths.value}
βπInfo Actualizada : ${json.lastUpdate}
β°βββββΒ°.β‘.Β°β§βββββ`.trim())
else throw json
}
handler.help = ['covid'].map(v => v + ' <paΓ­s>')
handler.tags = ['info']
handler.command = /^(corona|covid|covid19)$/i
handler.limit = 1
export default handler
