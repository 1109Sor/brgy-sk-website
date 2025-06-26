import Image from "next/image";
import Link from "next/link";

export default function RowelProfile() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 px-6 py-12 font-poppins">
      <div className="max-w-4xl mx-auto">

        {/* 🔙 Back Button */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-sm text-green-700 hover:text-green-900 transition group">
            <span className="mr-1 group-hover:-translate-x-1 transform transition">←</span>
            Back to Home
          </Link>
        </div>

        {/* 🔲 Profile Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center border border-green-200">
          {/* 🖼️ Profile Image */}
          <div className="flex justify-center mb-6">
            <Image
              src="/rowel.jpg"
              alt="SK Chairman Rowel A. Capillo"
              width={160}
              height={160}
              className="rounded-full shadow-lg border-4 border-green-300"
            />
          </div>

          {/* 📛 Titles */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Get to Know Your SK Chairman
          </h1>
          <h2 className="text-xl text-green-800 font-semibold mb-4">
            Rowel A. Capillo, RCrim
          </h2>

          {/* 📖 Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-green-800">
            Rowel A. Capillo is a dedicated public servant and a proud
            <strong className="font-semibold"> Registered Criminologist (RCrim)</strong>. As the current
            <strong className="font-semibold"> SK Chairman of Barangay Taloc</strong>, he leads the youth
            council with vision, integrity, and commitment to creating positive change.
            His leadership focuses on youth empowerment, civic involvement, and community service.
          </p>

          {/* 🧭 More Info */}
          <div className="mt-8 text-left">
            <h3 className="text-lg font-semibold mb-2 text-green-900">Leadership Goals:</h3>
            <ul className="list-disc list-inside text-green-800">
              <li>Empowering future leaders through training and programs</li>
              <li>Promoting youth engagement in community initiatives</li>
              <li>Building a more inclusive and active SK Council</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
