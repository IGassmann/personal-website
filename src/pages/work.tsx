import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import Work from '@/components/Work'

type WorkPageProps = {
  origin: string
}

const WorkPage: NextPage<WorkPageProps> = ({ origin }) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title="Work"
        description="Igor Gassmann's Work"
        openGraph={{
          url: `${origin}${router.asPath}`,
          title: 'Work',
        }}
      />
      <Work />
    </>
  )
}

export default WorkPage

export const getStaticProps: GetStaticProps<WorkPageProps> = async () => {
  const {
    default: { origin },
  } = await import('@/site.config')

  return {
    props: {
      origin,
    },
  }
}
