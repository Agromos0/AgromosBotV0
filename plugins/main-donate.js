
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo
y recibes 500k de puntos que puedes cambiar por dinero real

▢ *PayPal*
• *correo :* soyrwy242@gmail.com

▢ *tranferencia banco azteca*
• *Alias :* angel pantoja
• *clave inter :* 1271 8001 6091 1755 79
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
