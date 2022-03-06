import { FullScreenHero } from '@/components/dom/FullScreenHero'

const DOM = () => {
  return <FullScreenHero />
}

// canvas components goes here
const R3F = () => {
  return <></>
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      {/* <R3F r3f /> */}
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Digital Humanitarians',
    },
  }
}
