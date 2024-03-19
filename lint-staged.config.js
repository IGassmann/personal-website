const ESLintTask = (fileNames) =>
  `next lint --fix --file ${fileNames
    .map((file) => file.split(process.cwd())[1])
    .join(' --file ')}`;

module.exports = {
  // Type check TypeScript files
  '**/*.{tsx,ts}': 'tsc-files --noEmit',
  // Run ESLint before Prettier for TypeScript and JavaScript files
  './{src,scripts}/**/*.{tsx,ts,js}': [ESLintTask, 'prettier --write'],
  // Run Prettier for non-TypeScript and non-JavaScript files
  '!(./{src,scripts}/**/*.{tsx,ts,js})': 'prettier --ignore-unknown --write',
};
