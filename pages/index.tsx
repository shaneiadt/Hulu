import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests, { Result } from '../utils/requests'

interface Props {
  results: Result[];
}

const Home: NextPage<Props> = ({ results }) => {
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const genre = query.genre;
  const url = typeof genre === 'string' ? requests[genre].url : requests.fetechTrending.url;

  const request: { results: Result[] } = await fetch(`https://api.themoviedb.org/3${url}`).then(res => res.json());

  return {
    props: {
      results: request.results
    }
  };
}
