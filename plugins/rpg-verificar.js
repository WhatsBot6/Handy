import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `π΄π·πΎπ»π° ππ° ππ΄ π΄π½π²ππ΄π½πππ°ππ ππ΄πΆπΈππππ°π³πΎ π΄π½ πΌπΈ π±π°ππ΄ π³π΄ π³π°ππΎπ ππΈ π³π΄ππ΄π°π π΄π»πΈπΌπΈπ½π°πβοΈ ππ ππ΄πΆπΈππππΎ πΏπ°ππ° ππ΄πΆπΈππππ°πππ΄ πΎπππ° ππ΄π πππ°π» π²πΎπΌπ°π½π³πΎπ±\n/unreg <NΓΊmero de serie>`
  if (!Reg.test(text)) throw `πΉπ·πΎπ»π° ππ΄ πΈπ½π΅πΎππΌπΎ πππ΄ π·π°π βπ΅π°π»π»π°π³πΎ π²πΎπ½ π΄π» ππ΄πΆπΈππππΎ ππ° ππ΄ π»πΎ π·π°π π·π΄π²π·πΎ π΄π½ π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄β¨ππ΄ π³πΎπ ππ½ βοΈπ΄πΉπ΄πΌπΏπ»πΎ\n/Reg Yovani .21`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'ππ·πΎπ»π° ππ΄ πΈπ½π΅πΎππΌπΎ πππ΄ π΄π» π½πΎπΌπ±ππ΄ π½πΎ πΏππ³π΄ π΄πππ°π ππ°π²ΓπΎ π΄π½ π΄π» ππ΄πΆπΈππππΎ ππΈπ΄π½π΄π πππ΄ πΏπΎπ½π΄π ππ π½πΎπΌπ±ππ΄π'
  if (!age) throw 'βοΈπ·πΎπ»π° ππ΄ πΈπ½π΅πΎππΌπΎ π½πΎ πΏππ΄π³π΄ π΄πππ°π ππ°π²πΈπΎ ππ π΄π³π°π³ π΄π½ π΄π» ππ΄πΆπΈππππΎ ππΈπ΄π½π΄π πππ΄ πΏπΎπ½π΄πππ΄ ππ π΄π³π°π³π±'
  if (name.length >= 30) throw 'βοΈπ·πΎπ»π° ππΎππ΄ πΏππ΄π³π΄π πΏπΎπ½π΄π ππ½ π½πΎπΌπ±ππ΄ πΌΓπ π²πΎπππΎπ΄ππ° πππ΄ π΄π» πππ΄ π΄ππΓπ π³π΄πΌπ°ππΈπ°π³πΎ π»π°ππΆπΎ πΏπΎπ π΅π°ππΎπ π΄ππ²ππΈπ±π΄ π»πΎ πΌΓπ π²πΎπππΎπΉοΈ' 
  age = parseInt(age)
  if (age > 100) throw 'β¨π·πΎπ»π° ππΎππ΄ πΏπΎπ π΅π°ππΎπ βοΈπΏππ΄π³π΄π πΏπΎπ½π΄π ππ π΄π³π°π³ πΌΓπ π±π°πΉπ° πΎ π°π²π°ππΎ π΄ππ΄π ππ½ π°π½π²πΈπ°π½πΎπ€­?'
  if (age < 5) throw 'ππΏπΎπ π΅π°ππΎπ ππ°πΌπΎπ π½πΎ π΄πππ΄π½ πΉππΆπ°π½π³πΎπ€¨ π²πΎπΌπΎ ππ½πΎ π½πΈπ½πΎ π³π΄ π²πΈπ½π²πΎ π°π½πΎπ ππ° π° πΏπΎπ³π΄π π΄ππ²ππΈπ±πΈππ'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
βγβ«·α­Κα΄α΄α΄s-Κα΄α΄-α΄α΄οΉβγβ  
ββ[π΄]π·πΎπ»π° ππ° π΄ππΓπ ππ΄πΆπΈππππ°π³πΎ 
ββ[π€΄]π½πΎπΌπ±ππ΄ ${name}
ββ[π§]π΄π³π°π³ ${age} π°ΓπΎπ 
ββ[β’οΈ]π½ΓπΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄
ββ[βοΈ] ${sn}
βββββΧβΧβΧβΧβββ
`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(Reg|reg|registrar|reg(ister)?)$/i

export default handler
 
