import Head from 'next/head'


export default function Home() {
  return (
    <div className={styles.allow}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Bem vindo!</h1>
    </div>
  )
}
