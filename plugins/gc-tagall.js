let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*πΌπ΄π½ππ°πΉπ΄:* ${pesan}`
let teks = `β­βπππππππ π πππππβ\nβ£${oi}\nβ£β *π΄ππΈπππ΄ππ°π:*\n`
for (let mem of participants) {
teks += `β£β₯ @${mem.id.split('@')[0]}\n`}
teks += `*β*β«·α­andy-Κα΄α΄-α΄α΄οΉβ*\nβ°βββββΒ°.β‘.Β°β§βββββ`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciΓ³n)$/i
handler.admin = true
handler.group = true
export default handler
