let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/welgc.webp"
let stikerbyegc = "./src/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '⫷᭄andy-ʙᴏᴛ-ᴍᴅ﹏✍', body: '©ᴏғᴄ-andy✍', sourceUrl: `https://instagram.com/andy_mr_lit`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ✍', body: '©ᴏғᴄ-andy✍', sourceUrl: `https://instagram.com/andy_mr_lit`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
