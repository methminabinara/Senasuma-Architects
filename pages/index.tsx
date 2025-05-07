import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Senasuma Architects</title>
        <meta name="description" content="Senasuma Architects - Innovative and Sustainable Architecture" />
      </Head>
      <section id="home" className="relative flex items-center justify-center h-[90vh] bg-gray-100 text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Designing Spaces, Shaping Dreams
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            We craft innovative and sustainable architectural solutions.
          </p>
          <Link href="#projects" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-700 transition">
            View Our Work
          </Link>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center h-[90vh]">
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

      <section id="projects" className="mx-auto px-4 py-16 bg-gray-100 h-[90vh]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Projects
        </h2>
        <div className="max-w-6xl mx-auto items-center grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/projects/project1.jpg"
              alt="Modern Villa"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Modern Villa
              </h3>
              <p className="text-gray-700">
                A luxurious modern villa blending nature and architecture.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/projects/project2.jpg"
              alt="Urban Office"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Urban Office
              </h3>
              <p className="text-gray-700">
                A sleek commercial space designed for productivity and comfort.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/projects/project3.jpg"
              alt="Lake House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lake House
              </h3>
              <p className="text-gray-700">
                A serene lakeside retreat that embraces minimalism and light.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-4 py-16 text-center h-[90vh]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We’d love to discuss your next project. Reach out to us today!
        </p>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Address:</strong> "Senasuma Architects", Maraggoda, Porawagama, Elpitiya.
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+94123456789" className="text-indigo-600 hover:underline">
              +94724501104
            </a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:info@senasumaarchitects.com"
              className="text-indigo-600 hover:underline"
            >
              info@senasumaarchitects.com
            </a>
          </p>
        </div>
      </section>


    </>
  );
}
