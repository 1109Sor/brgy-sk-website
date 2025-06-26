import Image from "next/image";
import Link from "next/link";
import "@fontsource/poppins";

export default function Home() {
  return  (
    <div className="min-h-screen font-poppins scroll-smooth">
      {/* 🔵 NAVIGATION BAR */}
      <nav className="bg-green-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand / Logo */}
          <a href="#home" className="text-xl font-semibold tracking-wide hover:opacity-90 transition">
            SK Taloc
          </a>

          {/* Navigation + Login */}
          <div className="flex items-center space-x-6">
            <ul className="hidden sm:flex items-center gap-5 text-sm sm:text-base">
              <li><a href="#home" className="hover:text-green-200 transition duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-green-200 transition duration-200">About Us</a></li>
              <li><a href="#events" className="hover:text-green-200 transition duration-200">Upcoming Events</a></li>
              <li><a href="#gallery" className="hover:text-green-200 transition duration-200">Gallery</a></li>
              <li><a href="#contact" className="hover:text-green-200 transition duration-200">Contact</a></li>
            </ul>
            <a
              href="/login"
              className="bg-white text-green-900 font-medium text-sm px-4 py-2 rounded-full shadow hover:bg-green-100 transition duration-300"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

{/* 🔵 HOME */}
<section
  id="home"
  className="relative min-h-screen bg-gradient-to-br from-green-100 via-white to-green-100 flex items-center justify-center text-center px-6 sm:px-12"
>
  {/* Background Accent (optional) */}
  <div className="absolute inset-0 pointer-events-none bg-[url('/grid.svg')] opacity-10" />

  <div className="relative z-10 max-w-4xl w-full space-y-6 animate-fade-in-up">
    {/* Logo Container */}
    <div className="mx-auto w-32 h-32 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl ring-2 ring-green-300 mb-6">
      <Image src="/sk-logo.png" alt="SK Logo" width={64} height={64} />
    </div>

    {/* Headline */}
    <h1 className="text-3xl sm:text-5xl font-bold text-green-900 leading-tight">
      Empowering Barangay Taloc’s Youth
    </h1>

    {/* Subheadline */}
    <p className="text-green-800 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
      Championing <span className="font-semibold text-green-900">action</span>, <span className="font-semibold text-green-900">leadership</span>, and <span className="font-semibold text-green-900">unity</span> through service and collaboration.
    </p>

    {/* CTA Button */}
    <div>
      <a
        href="#about"
        className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        Learn More
      </a>
    </div>
  </div>
</section>


      {/* 🔵 ABOUT */}
      <section id="about" className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center text-green-950">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="max-w-3xl mb-6">
          SK Taloc, led by SK Chairman Rowel A. Capillo created a youth-led organization called "Y'Taloc" spearheaded by the SK Treasurer and Engineer Krischan S. Gelasan that aims to build empowered, responsible, and service-oriented young leaders.
        </p>
<div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
  <Link href="/pages/details/rowel" className="flex flex-col items-center md:w-1/3 hover:opacity-90 transition">
    <Image src="/rowel.jpg" alt="Rowel Capillo" width={140} height={140} className="rounded-full" />
    <p className="mt-4 font-bold text-green-900 text-center text-lg">
      SK Chairman<br />Rowel A. Capillo
    </p>
  </Link>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:w-2/3">
    <Link href="/pages//details/kevin" className="flex flex-col items-center hover:opacity-90 transition">
      <Image src="/kevin.jpg" alt="Kevin Carmona" width={100} height={100} className="rounded-full" />
      <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Kevin H. Carmona</p>
    </Link>

    <Link href="/pages//details/hannah" className="flex flex-col items-center hover:opacity-90 transition">
      <Image src="/hannah.jpg" alt="Hannah Lobrido" width={100} height={100} className="rounded-full" />
      <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Hannah Sofea T. Lobrido</p>
    </Link>

    <Link href="/pages//details/earl" className="flex flex-col items-center hover:opacity-90 transition">
      <Image src="/earl.jpg" alt="Earl Paildan" width={100} height={100} className="rounded-full" />
      <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Earl John M. Paildan</p>
    </Link>

    <Link href="/pages//details/adrian" className="flex flex-col items-center hover:opacity-90 transition">
      <Image src="/adrian.jpg" alt="Adrian Cobrador" width={100} height={100} className="rounded-full" />
      <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Adrian M. Cobrador</p>
    </Link>

    <Link href="/pages//details/juliane" className="flex flex-col items-center hover:opacity-90 transition">
      <Image src="/juliane.jpg" alt="Juliane Cuayson" width={100} height={100} className="rounded-full" />
      <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Juliane P. Cuayson</p>
    </Link>

    <Link href="/pages//details/martin" className="flex flex-col items-center hover:opacity-90 transition">
      <Image src="/martin.jpg" alt="Martin Malunes" width={100} height={100} className="rounded-full" />
      <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Martin B. Malunes</p>
    </Link>

    <Link href="/pages//details/katlene" className="flex flex-col items-center hover:opacity-90 transition">
      <Image src="/katlene.jpg" alt="Katlene Paredes" width={100} height={100} className="rounded-full" />
      <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Katlene Ann M. Paredes</p>
    </Link>

    <Link href="/pages//details/krischan" className="flex flex-col items-center hover:opacity-90 transition">
      <Image src="/krischan.jpg" alt="Krischan Gelasan" width={100} height={100} className="rounded-full" />
      <p className="mt-2 text-green-800 text-center text-sm">SK Treasurer<br />Krischan S. Gelasan</p>
    </Link>

    <Link href="/pages//details/danica" className="flex flex-col items-center hover:opacity-90 transition">
      <Image src="/danica.jpg" alt="Danica Seraspi" width={100} height={100} className="rounded-full" />
      <p className="mt-2 text-green-800 text-center text-sm">SK Secretary<br />Danica Marie Q. Seraspi</p>
    </Link>
  </div>
</div>
      </section>

{/* 🔵 EVENTS */}
<section id="events" className="min-h-screen bg-green-100 py-20 px-6 text-green-900 text-center">
  {/* Header */}
  <div className="mb-16">
    <h2 className="text-3xl sm:text-5xl font-bold mb-4">📅 Upcoming Events</h2>
    <p className="text-green-800 max-w-2xl mx-auto text-base sm:text-lg">
      Discover activities designed to engage, uplift, and unite the youth of Barangay Taloc.
    </p>
  </div>

  {/* Event Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {[
      {
        emoji: "🏳️‍🌈",
        title: "Pride Month Celebration",
        date: "June 29, 2025",
        desc: "Celebrate diversity with vibrant activities, inspiring speakers, and performances that honor identity and love."
      },
      {
        emoji: "🌟",
        title: "Y'Taloc Membership Opening",
        date: "Now Accepting Applications",
        desc: "Become part of our dynamic youth movement. We're opening doors for aspiring leaders ready to create impact."
      },
      {
        emoji: "🎉",
        title: "Linggo ng Kabataan",
        date: "August 2025",
        desc: "A week of learning, fun, and service. Competitions, workshops, and projects all centered around youth empowerment."
      }
    ].map((event, index) => (
      <div
        key={index}
        className="relative bg-white rounded-2xl border border-green-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-left"
      >
        {/* Icon Badge */}
        <div className="absolute -top-5 left-6 bg-green-700 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
          <span className="text-lg">{event.emoji}</span>
        </div>

        {/* Event Content */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-900 mb-2">{event.title}</h3>
          <span className="block text-xs font-medium text-green-600 uppercase tracking-wide mb-2">
            {event.date}
          </span>
          <p className="text-sm text-green-700 leading-relaxed">
            {event.desc}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* View All CTA */}
  <div className="mt-16">
    <a
      href="/achievements"
      className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-6 py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
    >
      View All Achievements →
    </a>
  </div>
</section>


{/* 🔵 GALLERY */}
<section id="gallery" className="min-h-screen bg-white py-20 px-6 text-green-950 text-center">
  {/* Heading */}
  <div className="mb-16">
    <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">
      Achievements & Past Activities
    </h2>
    <p className="text-green-700 max-w-2xl mx-auto text-base sm:text-lg">
      A look back at our impactful initiatives that empowered, educated, and energized the youth of Barangay Taloc.
    </p>
  </div>

  {/* Gallery Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {/* Gallery Card */}
    {[
      {
        src: "/Ytaloc.jpg",
        alt: "Y'Taloc Xperience",
        caption: "Y'Taloc Xperience: Leadership and Team-Building Camp"
      },
      {
        src: "/summerj.jpg",
        alt: "Summer Job",
        caption: "Summer Job Pahabol 2025: Youth Employment Initiative"
      },
      {
        src: "/edukit.jpg",
        alt: "EDUKIT",
        caption: "Project Edukit Year 2: School Supply Distribution"
      }
    ].map((item, index) => (
      <div
        key={index}
        className="group relative bg-green-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {/* Image */}
        <div className="overflow-hidden">
          <Image
            src={item.src}
            alt={item.alt}
            width={400}
            height={300}
            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Caption */}
        <div className="p-5 text-left">
          <p className="text-sm sm:text-base font-medium text-green-800">
            {item.caption}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


{/* 🔵 CONTACT */}
<section
  id="contact"
  className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-20 text-green-900"
>
  <div className="max-w-2xl w-full text-center space-y-8">
    {/* Heading */}
    <div>
      <h2 className="text-3xl sm:text-5xl font-bold mb-2">Contact & Suggestions</h2>
      <p className="text-green-700 text-base sm:text-lg">
        Have questions or ideas for future events? We'd love to hear from you!
      </p>
    </div>

    {/* Contact Form */}
    <form className="bg-white shadow-lg rounded-2xl p-8 space-y-5 text-left">
      {/* Name */}
      <div>
        <label className="block mb-1 text-sm font-medium text-green-800">Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border border-green-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Event Select */}
      <div>
        <label className="block mb-1 text-sm font-medium text-green-800">Select Event</label>
        <select className="w-full border border-green-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">
          <option>Select an event</option>
          <option>Tree Planting</option>
          <option>Basketball League</option>
          <option>Leadership Training</option>
          <option>Others</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block mb-1 text-sm font-medium text-green-800">Your Message</label>
        <textarea
          placeholder="Type your suggestion or inquiry here..."
          rows="4"
          className="w-full border border-green-200 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</section>


      {/* 🔵 FOOTER */}
      <footer className="bg-green-900 text-white text-center text-sm p-4">
        © 2025 Barangay Taloc SK. All rights reserved.
      </footer>
    </div>
  );
}
