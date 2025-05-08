import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Senasuma Architects</title>
        <meta name="description" content="Senasuma Architects - Innovative and Sustainable Architecture" />
      </Head>
      <section id="home" className="relative flex items-center justify-center min-h-[90vh] bg-gradient-to-b from-gray-50 to-gray-100 text-center px-4 py-12 mt-10">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-left md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Designing <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">Spaces</span>, Shaping Dreams
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl">
              We craft innovative and sustainable architectural solutions that transform ideas into reality.
            </p>
            <Link href="#projects" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
              View Our Work
            </Link>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end perspective-[1200px]">
            <div className="relative transform transition-all duration-500 hover:scale-[1.03] hover:-rotate-2 hover:translate-y-[-5px]">
              <Image
                src="/images/img2.png"
                alt="Modern Architecture Design"
                width={600}
                height={450}
                className="rounded-lg object-cover h-auto max-h-[450px] z-10 relative shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-900/10 rounded-lg -z-10 blur-[2px]"></div>
              <div className="absolute -bottom-7 -right-7 w-full h-full bg-gray-900/5 rounded-lg -z-20 blur-[4px]"></div>
              <div className="absolute top-0 left-0 w-full h-full rounded-lg shadow-inner pointer-events-none z-20"></div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center min-h-[90vh]"> 
        <div>
          <Image
            src="/images/about.png"
            alt="Our Studio"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
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
      </section>

      <section id="projects" className="mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-[90vh]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          <span className="inline-block relative">
            Our Projects
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
          </span>
        </h2>
        <div className="max-w-6xl mx-auto items-center grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl shadow-lg group perspective-800">
            <div className="relative">
              <Image
                src="/images/project1.jpg"
                alt="Modern Villa"
                width={400}
                height={300}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-3 left-4 right-4 h-2 bg-gradient-to-r from-gray-100 to-white blur-md"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Modern Villa
              </h3>
              <p className="text-gray-700 mb-4">
                A luxurious modern villa blending nature and architecture.
              </p>
              <div className="flex justify-end">
                {/* <span className="text-sm font-medium text-gray-800 px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">View Details</span> */}
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl shadow-lg group perspective-800">
            <div className="relative">
              <Image
                src="/images/project2.jpg"
                alt="Urban Office"
                width={400}
                height={300}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-3 left-4 right-4 h-2 bg-gradient-to-r from-gray-100 to-white blur-md"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Urban Office
              </h3>
              <p className="text-gray-700 mb-4">
                A sleek commercial space designed for productivity and comfort.
              </p>
              <div className="flex justify-end">
                {/* <span className="text-sm font-medium text-gray-800 px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">View Details</span> */}
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl shadow-lg group perspective-800">
            <div className="relative">
              <Image
                src="/images/project3.jpg"
                alt="Lake House"
                width={400}
                height={300}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-3 left-4 right-4 h-2 bg-gradient-to-r from-gray-100 to-white blur-md"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lake House
              </h3>
              <p className="text-gray-700 mb-4">
                A serene lakeside retreat that embraces minimalism and light.
              </p>
              <div className="flex justify-end">
                {/* <span className="text-sm font-medium text-gray-800 px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">View Details</span> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-4 py-16 text-center min-h-[90vh]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We’d love to discuss your next project. Reach out to us today!
        </p>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Address:</strong> Senasuma Architects, Maraggoda, Porawagama, Elpitiya.
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
