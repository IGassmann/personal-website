import { usePlausible } from 'next-plausible'
import React, { useEffect } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

type PlausibleEvents = {
  '404': { path: string }
}

type NotFoundPageProps = {
  origin: string
}

const NotFoundPage: NextPage<NotFoundPageProps> = ({ origin }) => {
  const router = useRouter()
  const plausible = usePlausible<PlausibleEvents>()

  useEffect(() => {
    plausible('404', { props: { path: router.asPath } })
  })

  return (
    <>
      <NextSeo
        title="Not Found"
        description="The page doesn't exist."
        openGraph={{
          title: 'Not Found',
          url: `${origin}${router.asPath}`,
        }}
      />
      <h1>Not Found</h1>
      <p>Nothing to see here. Move along.</p>
    </>
  )
}

export default NotFoundPage

export const getStaticProps: GetStaticProps<NotFoundPageProps> = async () => {
  const {
    default: { origin },
  } = await import('@/site.config')

  return {
    props: {
      origin,
    },
  }
}
