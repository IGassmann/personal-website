const fs = require('fs');
const { join } = require('path');

module.exports = () => {
  const postsDirectory = join(process.cwd(), 'src', 'content', 'posts');
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
}