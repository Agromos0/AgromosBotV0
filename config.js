import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['523931806576', 'AngelSp', true],
  ['523326380972'], 
  ['523326380972'] 
] //Numeros de owner 

global.mods = ['523931806576'] 
global.prems = ['523931806576', '5219631769130', '573125484672']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'Toxi-Bot' 
global.author = '@AngelSp' 
global.fgig = 'https://www.paypal.me/ToxicBotw' 
global.dygp = 'https://chat.whatsapp.com/Do0jEl7ss4e8wZ2Q0cOq3u'
global.fgsc = 'https://www.paypal.me/ToxicBotw' 
global.fgyt = 'https://youtube.com/Toxic'
global.fgpyp = 'https://www.paypal.me/ToxicBotw'
global.fglog = 'https://www.paypal.me/ToxicBotw' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
