const ESLintTask = (fileNames) => `eslint --fix ${fileNames.map((file) => `"${file}"`).join(' ')}`;

const config = {
  // Type-check TypeScript files
  '**/*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
  // Run ESLint and Prettier consecutively so that the tasks don't conflict with each other
  './src/**/*.{tsx,ts}': [ESLintTask, 'prettier --write'],
  // Run Prettier in parallel for non-TypeScript files
  '!(./src/**/*.{tsx,ts})': (fileNames) => {
    const filtered = fileNames.filter((f) => !f.includes('/.claude/'));
    return filtered.length
      ? `prettier --ignore-unknown --write ${filtered.map((f) => `"${f}"`).join(' ')}`
      : 'echo "No files to format"';
  },
};

export default config;
