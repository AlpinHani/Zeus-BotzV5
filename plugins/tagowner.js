let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *@6282287750102 Ada yang memanggil anda 🗿*`, m)

  conn.reply(m.chat, `
 _Kak_ @6282287750102 *_Lagi Sibuk_* _-
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6282287750102 /i
handler.command = new RegExp

module.exports = handler
