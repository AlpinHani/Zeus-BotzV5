let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
*────────「 SCRIPT 」 ────────*
Hai 👋
saya 𝙰𝚕𝚙𝚒𝚗𝚇𝙳 ×፝֟͜×
Bot Ini Menggunakan Sc dari:
*Sc?,Youtube banyak*
`.trim(), '©AlpinXD', 'Thanks', '.tqto')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
