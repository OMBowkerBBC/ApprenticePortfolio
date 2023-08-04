const fs = require('fs')

const files = fs.readdirSync('./sections')

files.forEach(file => {
  const contents = fs.readFileSync(`./sections/${file}`).toString().split('\n')[0]
  fs.writeFileSync(`./sections/${file}`, `${contents}\n\n  \\begin{quote}\n    \\textit{\'\'}\n  \\end{quote}\n\n\\newpage`)
})