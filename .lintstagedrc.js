const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const src = `./src/**/*.{js,jsx,ts,tsx}`
const next = `./src/pages/**/*.{js,jsx,ts,tsx}`
module.exports = {
  [src]: ['prettier --write', 'eslint'],
  [next]: [buildEslintCommand]
}
