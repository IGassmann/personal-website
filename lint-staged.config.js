const ESLintTask = (fileNames) =>
  `next lint --fix --file ${fileNames
    .map((file) => file.split(process.cwd())[1])
    .join(' --file ')}`;

module.exports = {
  // Type check TypeScript files
  '**/*.{tsx,ts}': 'tsc-files --noEmit',
  // Run tests
  './{src,scripts,test}/**/*.{tsx,ts,js}': 'jest --bail --passWithNoTests --findRelatedTests',
  // Run ESLint before Prettier for TypeScript and JavaScript files
  './{src,test,scripts}/**/*.{tsx,ts,js}': [ESLintTask, 'prettier --write'],
  // Run Prettier for non-TypeScript and non-JavaScript files
  '!(./{src,test,scripts}/**/*.{tsx,ts,js})': 'prettier --ignore-unknown --write',
};
