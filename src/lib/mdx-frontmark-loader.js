module.exports = async function (fileInput) {
  const callback = this.async()
  const { content, data } = matter(fileInput)

  const code = `export const frontMatter = ${JSON.stringify(data)}
 
${content}`

  return callback(null, code)
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})