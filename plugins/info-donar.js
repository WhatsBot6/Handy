
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
┌「⫷᭄andy-ʙᴏᴛ-ᴍᴅ﹏✍」
│◦➛📔ᩭ✎si deseas 🤝apoyarme mejor ayúdame y apóyame en mis cuentas oficiales de 🌆Instagram y en 👥 WhatsApp y podrías regalarme una estrella en mi cuenta de git📈
│◦➛🍀ᩭ✎𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁
│◦➛📚ᩭ✎http://wa.me/14036687826 
│◦➛📔ᩭ✎group bot ofc
│◦➛📔ᩭ✎https://chat.whatsapp.com/DSjOomRaTkU4z1a5ngl2Yw
│◦➛☃️ᩭ✎𝙶𝙸𝚃 𝙲𝙻𝙾𝙽𝙴
│◦➛📚ᩭ✎https://github.com/andymrlit
│◦➛🌱ᩭ✎MY IG
│◦➛🌴ᩭ✎https://instagram.com/andy_mr_lit
│◦➛📔ᩭ✎voy a agradecer ☘️mucho su apoyo 📚
│◦➛🌱𝐎𝐅C ANDY☘️ 
╰────────────┈⊷`
let buttonMessage= {
'document': { url: `https://instagram.com/andy_mr_lit` },
'mimetype': `application/${document}`,
'fileName': `⫷᭄andy-ʙᴏᴛ-ᴍᴅ﹏✍`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/andymrlit',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://instagram.com/andy_mr_lit'}},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
{buttonId: `${usedPrefix}sc`, buttonText: {displayText: '𝙶𝙸𝚃𝙷𝚄𝙱'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i

export default handler