let handler  = async (m, { conn, usedPrefix, command }) => {
 {await m.reply('⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱')}
let res = "https://recoders-area.caliph.repl.co/api/lolivid"
conn.sendButton(m.chat, `ʟᴏʟɪ ɪѕ ᴄᴜᴛᴇ 🥺`, wm, res, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)}
handler.help = ['lolivid']
handler.tags = ['random']
handler.command = /^(lolivid|lolivideos|lolívid)$/i
handler.limit = 4
export default handler
