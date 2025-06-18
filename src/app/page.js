import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans scroll-smooth">
      {/* 🔵 NAVIGATION BAR */}
      <nav className="bg-green-900 text-white p-4 shadow-md sticky top-0 z-50">
        <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About Us</a></li>
          <li><a href="#events" className="hover:underline">Upcoming Events</a></li>
          <li><a href="#gallery" className="hover:underline">Gallery</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* 🔵 HOME */}
      <section id="home" className="min-h-screen bg-green-100 flex items-center justify-center flex-col text-center p-8">
        <Image src="/sk-logo.png" alt="SK Logo" width={100} height={100} className="mb-4" />
        <h1 className="text-3xl font-bold text-green-900">Welcome to Barangay Taloc SK</h1>
        <p className="text-green-800 mt-2">Empowering youth through action, leadership, and unity.</p>
      </section>

      {/* 🔵 ABOUT */}
      <section id="about" className="min-h-screen bg-white flex items-center justify-center flex-col p-8 text-center text-green-950">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="max-w-3xl">
          We are the youth leaders of Barangay Taloc, Bago City, committed to promoting social responsibility, leadership, and active citizenship among the youth through innovative programs and community service.
        </p>
      </section>

      {/* 🔵 EVENTS */}
      <section id="events" className="min-h-screen bg-green-100 flex items-center justify-center flex-col p-8 text-center text-green-900">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="space-y-2">
          <li>🌱 Tree Planting – July 10, 2025</li>
          <li>🏀 SK Basketball League – August 2025</li>
          <li>🎓 Youth Leadership Training – September 2025</li>
        </ul>
      </section>

      {/* 🔵 GALLERY */}
      <section id="gallery" className="min-h-screen bg-white flex items-center justify-center flex-col p-8 text-center text-green-950">
        <h2 className="text-2xl font-semibold mb-6">Achievements & Past Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl">
          <div>
            <Image src="/gallery1.jpg" alt="Clean-up Drive" width={300} height={200} className="rounded-md" />
            <p className="mt-2 text-sm text-gray-600">Clean-Up Drive 2024</p>
          </div>
          <div>
            <Image src="/gallery2.jpg" alt="Tree Planting" width={300} height={200} className="rounded-md" />
            <p className="mt-2 text-sm text-gray-600">Tree Planting 2024</p>
          </div>
          <div>
            <Image src="/gallery3.jpg" alt="Leadership Seminar" width={300} height={200} className="rounded-md" />
            <p className="mt-2 text-sm text-gray-600">Youth Seminar 2024</p>
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
