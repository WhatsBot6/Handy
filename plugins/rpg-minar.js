let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['ǫᴜᴇ ᴘʀᴏ 😎 ʜᴀs ᴍɪɴᴀᴅᴏ','🌟✨ ɢᴇɴɪᴀʟ!! ᴏʙᴛɪᴇɴᴇs','ᴡᴏᴡ!! ᴇʀᴇs ᴜɴ(ᴀ) ɢʀᴀɴ ᴍɪɴᴇʀᴏ(ᴀ) ⛏️ ᴏʙᴛɪᴇɴᴇs','ғᴇʟɪᴄɪᴅᴀᴅᴇs!! ᴀʜᴏʀᴀ ᴛɪᴇɴᴇs','⛏️⛏️⛏️ ᴏʙᴛɪᴇɴᴇs'])}\n`
let pp = 'src/minar.mp4'

let d = Math.floor(Math.random() * 10)
global.db.data.users[m.sender].limit += d * 1  
let time = global.db.data.users[m.sender].lastdiamantes + 600000
if (new Date - global.db.data.users[m.sender].lastdiamantes < 600000) throw `ʏᴀ ʜᴀs ᴍɪʀᴀᴅᴏ ᴅɪᴀᴍᴀɴᴛᴇs ᴇsᴘᴇʀᴀ${msToTime(time - new Date())} ᴘᴀʀᴀ ᴠᴏʟᴠᴇʀ ᴀ ᴍɪɴᴀʀ ⛏️`

conn.sendHydrated(m.chat, `${minar} ${d} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂`, wm, pp, 'https://github.com/OFC-YOVANI/HADES-BOT-MD.git', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['⚔️️ʜᴀᴅᴇs-ᴄᴏɪɴs', `.minar3`]
], m,)
global.db.data.users[m.sender].lastdiamantes = new Date * 1  

}
handler.help = ['minar']
handler.tags = ['diamantes']
handler.command = ['minar', 'miming3', 'mine3', 'minardiamantes', 'minargemas', 'minardiamante'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 6) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
