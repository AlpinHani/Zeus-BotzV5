let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
*BIODATA OWNER*

*Nama* : Alpin
*Umur* : 15
*Kelas* : 3 Smp
*Status* : Private

*SOSIAL MEDIA*

*instagram* : en4y.pin
*Facebook* : Private
*Chanel Youtube* : none
*Gmail* : Xnxx@gmail.com
*Github* : none

_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Raditya')).buffer(), ext, 'Recoded By Raditya', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
