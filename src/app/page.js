import Image from "next/image";
import "@fontsource/poppins";

export default function Home() {
  return (
    <div className="min-h-screen font-poppins scroll-smooth">
      {/* 🔵 NAVIGATION BAR */}
      <nav className="bg-green-900 text-white p-4 shadow-md sticky top-0 z-50"> 
        <ul className="flex flex-wrap justify-end gap-6 text-sm sm:text-base">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About Us</a></li>
          <li><a href="#events" className="hover:underline">Upcoming Events</a></li>
          <li><a href="#gallery" className="hover:underline">Gallery</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav> 

      {/* 🔵 HOME */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-100 flex items-center justify-center flex-col text-center p-8">
        <div className="animate-fade-in">
          <Image src="/sk-logo.png" alt="SK Logo" width={120} height={120} className="mb-6 drop-shadow-lg" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-4">Welcome to Barangay Taloc SK</h1>
          <p className="text-green-800 text-lg max-w-xl mx-auto leading-relaxed">
            Empowering youth through <span className="font-semibold text-green-900">action</span>, <span className="font-semibold text-green-900">leadership</span>, and <span className="font-semibold text-green-900">unity</span>.
          </p>
          <div className="mt-6">
            <a
              href="#about"
              className="inline-block bg-green-700 text-white px-6 py-2 rounded-full text-sm hover:bg-green-800 shadow-md transition duration-300"
            >
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
          <div className="flex flex-col items-center md:w-1/3">
            <Image src="/rowel.jpg" alt="Rowel Capillo" width={140} height={140} className="rounded-full" />
            <p className="mt-4 font-bold text-green-900 text-center text-lg"> SK Chairman<br />Rowel A. Capillo</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:w-2/3">
            <div className="flex flex-col items-center">
              <Image src="/kevin.jpg" alt="Kevin Carmona" width={100} height={100} className="rounded-full" />
              <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Kevin H. Carmona</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/hannah.jpg" alt="Hannah Lobrido" width={100} height={100} className="rounded-full" />
              <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Hannah Sofea T. Lobrido</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/earl.jpg" alt="Earl Paildan" width={100} height={100} className="rounded-full" />
              <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Earl John M. Paildan</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/adrian.jpg" alt="Adrian Cobrador" width={100} height={100} className="rounded-full" />
              <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Adrian M. Cobrador</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/juliane.jpg" alt="Juliane Cuayson" width={100} height={100} className="rounded-full" />
              <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Juliane P. Cuayson</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/martin.jpg" alt="Martin Malunes" width={100} height={100} className="rounded-full" />
              <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Martin B. Malunes</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/katlene.jpg" alt="Katlene Paredes" width={100} height={100} className="rounded-full" />
              <p className="mt-2 text-green-800 text-center text-sm">SK Kagawad<br />Katlene Ann M. Paredes</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/krischan.jpg" alt="Krischan Gelasan" width={100} height={100} className="rounded-full" />
              <p className="mt-2 text-green-800 text-center text-sm">SK Treasurer<br />Krischan S. Gelasan</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/danica.jpg" alt="Danica Seraspi" width={100} height={100} className="rounded-full" />
              <p className="mt-2 text-green-800 text-center text-sm">SK Secretary<br />Danica Marie Q. Seraspi</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔵 EVENTS */}
      <section id="events" className="min-h-screen bg-green-100 flex items-center justify-center flex-col p-8 text-center text-green-900">
        <h2 className="text-3xl font-bold mb-8">📅 Upcoming Events</h2>
        <p className="text-green-800 max-w-2xl mb-8">Check out our exciting upcoming activities aimed to engage, empower, and unite the youth of Barangay Taloc. Tap or hover on each card to explore details.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          <div className="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-bold text-green-800 mb-2">🏳️‍🌈 Pride Month Celebration</h3>
            <p className="text-sm text-green-700">Join us in celebrating diversity and inclusivity this <strong>June 29, 2025</strong>. Expect vibrant activities, speakers, and performances dedicated to embracing identity and love.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-bold text-green-800 mb-2">🌟 Y'Taloc Membership Opening</h3>
            <p className="text-sm text-green-700">Calling all youth leaders! Be part of a passionate and purpose-driven organization. Enrollment for new members is now open. Don't miss the chance to lead and serve!</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-bold text-green-800 mb-2">🎉 Linggo ng Kabataan</h3>
            <p className="text-sm text-green-700">Celebrate youth empowerment with week-long activities filled with competitions, workshops, and community initiatives. Details will be announced soon. Stay tuned!</p>
          </div>
    <a href="/achievements" className="hover:underline">Achievements</a>
        </div>
      </section>

      {/* 🔵 GALLERY */}
      <section id="gallery" className="min-h-screen bg-white flex items-center justify-center flex-col p-8 text-center text-green-950">
        <h2 className="text-3xl font-bold mb-6">📸 Achievements & Past Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div className="bg-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Image src="/Ytaloc.jpg" alt="Y'Taloc Xperience" width={300} height={200} className="rounded-md" />
            <p className="mt-3 text-sm font-medium text-green-800">Y'Taloc Xperience: Leadership and Team-Building Camp</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Image src="/summerj.jpg" alt="Summer Job" width={300} height={200} className="rounded-md" />
            <p className="mt-3 text-sm font-medium text-green-800">Summer Job Pahabol 2025: Youth Employment Initiative</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Image src="/edukit.jpg" alt="EDUKIT" width={300} height={200} className="rounded-md" />
            <p className="mt-3 text-sm font-medium text-green-800">Project Edukit Year 2: School Supply Distribution</p>
          </div>
        </div>
      </section>

      {/* 🔵 CONTACT */}
      <section id="contact" className="min-h-screen bg-green-50 flex items-center justify-center flex-col p-8 text-center text-green-900">
        <h2 className="text-2xl font-semibold mb-4">Contact & Suggestions</h2>
        <p className="mb-6">Have questions or suggestions for upcoming events? Let us know!</p>

        <form className="w-full max-w-lg bg-white p-6 rounded shadow space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded" />

          <select className="w-full border px-4 py-2 rounded">
            <option>Select an event</option>
            <option>Tree Planting</option>
            <option>Basketball League</option>
            <option>Leadership Training</option>
            <option>Others</option>
          </select>

          <textarea
            placeholder="Your Suggestion or Message"
            rows="4"
            className="w-full border px-4 py-2 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
          >
            Send
          </button>
        </form>
      </section>

      {/* 🔵 FOOTER */}
      <footer className="bg-green-900 text-white text-center text-sm p-4">
        © 2025 Barangay Taloc SK. All rights reserved.
      </footer>
    </div>
  );
}
