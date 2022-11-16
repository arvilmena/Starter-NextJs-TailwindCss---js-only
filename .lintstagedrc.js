const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const src = `./src/**/*.{js,jsx,ts,tsx}`
const pages = `./src/pages/**/*.{js,jsx,ts,tsx}`
const components = `./src/components/**/*.{js,jsx,ts,tsx}`
module.exports = {
  [src]: ['prettier --write', 'eslint'],
  [pages]: [buildEslintCommand],
  [components]: [buildEslintCommand]
}
