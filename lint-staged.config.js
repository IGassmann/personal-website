const buildESLintTask = (fileNames) =>
  `next lint --fix --file ${fileNames
    .map((file) => file.split(process.cwd())[1])
    .join(' --file ')}`;

module.exports = {
  // Run ESLint before Prettier for TypeScript and JavaScript source files
  '{src,scripts}/**/*.{tsx,ts,js}': [buildESLintTask, 'prettier --write'],
  // Run Prettier for non-TypeScript and non-JavaScript source files
  '!({src,scripts}/**/*.{tsx,ts,js})': 'prettier --ignore-unknown --write',
};
