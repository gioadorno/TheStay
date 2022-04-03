import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>TheStay</title>
        <meta name="description" content="Showcasing places to rent/stay" />
        <meta charSet='utf-8' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16' >
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {/* Pull data from server */}
          {exploreData?.map(({ img, location, distance }) => (
            <SmallCard key={img} img={img} distance={distance} location={location} />
          ))}
        </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>
            Live Anywhere
          </h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsData?.map(({ img, title }) => (
            <MediumCard key={img} img={img} title={title} />
          ))}
          </div>
        </section>
        <LargeCard img='https://links.papareact.com/4cj' title='The Greatest Outdoors' description='Wishlists curated by TheStay' buttonText='Get Inspired' />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('http://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const cardsData = await fetch('http://links.papareact.com/zp1').then(
    (res) => res.json()
  )

  return {
    props: {
      exploreData,
      cardsData
    }
  }
};