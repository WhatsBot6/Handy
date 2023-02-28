let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `╭─────°.♡.°‧─────
│⫷᭄andy-ʙᴏᴛ-ᴍᴅ﹏✍
│Wa.me/50931763273 (BOT)
│Wa.me/50942921106 (BOT) 
│Wa.me/14036687826 (CREADOR)
│Wa.me/50941411147 (CREADOR)
╰─────°.♡.°‧─────`.trim()   
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
'mediaUrl': 'https://instagram.com/andy_mr_lit',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://instagram.com/andy_mr_lit' }},
'caption': text,
'footer': wm,
'buttons':[ 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
