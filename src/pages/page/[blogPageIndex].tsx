import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { GetStaticPaths } from 'next'
import { getAllPostSlugs } from '@/lib/posts'
export { default, getStaticProps } from '@/pages'

interface StaticPathParams extends ParsedUrlQuery {
  blogPageIndex: string
}

export const getStaticPaths: GetStaticPaths<StaticPathParams> = async () => {
  const {
    default: { postsPerPage },
  } = await import('@/site.config')

  const postSlugs = getAllPostSlugs()

  const numberOfPages = Math.ceil(postSlugs.length / postsPerPage)

  let pagePaths = []
  for (let index = 1; index < numberOfPages; index++) {
    pagePaths.push({
      params: { blogPageIndex: index.toString() },
    })
  }

  return { paths: pagePaths, fallback: false }
}
