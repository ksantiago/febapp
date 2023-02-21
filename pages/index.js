import Head from 'next/head'
import ShowAndHide from '../components/ShowAndHide'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <ShowAndHide />
      </main>
    </>
  )
}
