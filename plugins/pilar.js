let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/pilar.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*LARI ADA PILAR GAY 😱*', 'status@broadcast')
}
handler.customPrefix = /pilar/i
handler.command = new RegExp

module.exports = handler
