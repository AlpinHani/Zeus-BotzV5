let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/tag.webp')
conn.fakeReply(m.chat, stc, '6282287750102@s.whatsapp.net', '*Kenapa Tag Owner Saya*')
}
handler.customPrefix = /^(@6282287750102)$/i
handler.command = new RegExp

module.exports = handler
