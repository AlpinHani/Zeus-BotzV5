let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*APA SAYANG?*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*￣へ￣*', 'status@broadcast')
}
handler.customPrefix = /^(tes|alpin)$/i
handler.command = new RegExp

module.exports = handler
