let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═══ *〘 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 〙*
║ ┅ ๑————————————๑
║┊ ⌲ *OVO* : _082287750102_ 
║┊ ⌲ *DANA* : _082287750102_
║┊ ⌲ *PULSA* : _082287750102_
╰═ ┅ ═══════
▌│█║▌║▌║║▌║▌║█│▌
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Payment')).buffer(), ext, `AlpinXD`, 'Nomor Owner', '.owner', 'Sewa Bot', '.sewa', m)

}
handler.help = ['payment']
handler.tags = ['owner']
handler.command = /^(payment)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm
