let handler = async (m, { conn, isOwner }) => {
let adv = Object.entries(global.db.data.users).filter(user => user[1].warn)
let warns = global.db.data.users.warn
let user = global.db.data.users
let imagewarn = './src/warn.jpg'
let caption = `β οΈ ππππ°ππΈπΎπ π°π³ππ΄πππΈπ³πΎπ\n 
β­βββββΒ°.β‘.Β°β§βββββ
ββ«·α­andy-Κα΄α΄-α΄α΄οΉβ
β *Total : ${adv.length} Usuarios* ${adv ? '\n' + adv.map(([jid, user], i) => `
β
β 1.- ${isOwner ? '@' + jid.split`@`[0] : jid} *(${user.warn}/3)*\nβ\nβ - - - - - - - - -`.trim()).join('\n') : ''}
β°βββββΒ°.β‘.Β°β§βββββ`
await conn.sendButton(m.chat, caption, wm, imagewarn, [['CREATOR π ', '/owner']], m, {mentions: await conn.parseMention(caption)})}
handler.command = /^(listwarn)$/i 
handler.group = true
handler.admin = true
handler.limit = 1
export default handler
