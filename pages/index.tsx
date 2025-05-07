import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Senasuma Architects</title>
        <meta name="description" content="Senasuma Architects - Innovative and Sustainable Architecture" />
      </Head>
      <section className="relative flex items-center justify-center h-[90vh] bg-gray-100 text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Designing Spaces, Shaping Dreams
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            We craft innovative and sustainable architectural solutions.
          </p>
          <Link href="/projects" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-700 transition">
            View Our Work
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
  <div>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      About Us
    </h2>
    <p className="text-gray-700 text-lg leading-relaxed mb-4">
      At Senasuma Architects, we believe architecture is not just about buildings, but about shaping environments that inspire and endure. With years of experience and a passion for design excellence, we deliver projects that blend creativity, functionality, and sustainability.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed">
      From residential to commercial spaces, our dedicated team works closely with clients to bring their vision to life while respecting the unique context of each site.
    </p>
  </div>
  <div>
    <img
      src="/hero.jpg"
      alt="Our Studio"
      className="rounded-lg shadow-lg w-full h-auto object-cover"
    />
  </div>
</section>

    </>
  );
}
