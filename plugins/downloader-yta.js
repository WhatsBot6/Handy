import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*[βππππβ] πΈπ½ππ΄πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π΄π½π»π°π²π΄ / π»πΈπ½πΊ π³π΄ ππ½ ππΈπ³π΄πΎ π³π΄ ππΎππππ±π΄*'
await m.reply(`*_β³Sα΄ α΄sα΄α΄ α΄Κα΄α΄α΄sα΄Ι΄α΄α΄ Sα΄ α΄α΄α΄Ιͺα΄...β³`)
await m.reply(`β _Cargando..._\nβ°β°β°β±β±β±β±β±β±`)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
//await conn.sendFile(m.chat, lolh.result.link, `${n}.mp3`, null, m, false, { mimetype: 'audio/mp4' })    
} catch {
await conn.reply(m.chat, '*[β] π΄πππΎπ π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π³π΄ππ²π°ππΆπ°π π΄π» π°ππ³πΈπΎ*', m)}
}}
handler.command = /^fgmp3|dlmp3|getaud|yt(a|mp3)$/i
handler.limit = 4
export default handler
