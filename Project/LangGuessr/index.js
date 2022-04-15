// const franc = require("franc")
import {franc} from 'franc'
// const langs = require("langs")
import langs from 'langs'
import colors from 'colors'

const input = process.argv[2]
const langCode = franc(input)

if(langCode === 'und') {
    console.log("SORRY, COULDN'D FIGURE OUT! TRY WITH MORE SAMPLE TEXT!".red)
} else {
    // const langCode = franc("Alle menslike wesens word vry");
    const language = langs.where("3", langCode)
    console.log(`Our best guess is: ${language.name}`.green)
}
