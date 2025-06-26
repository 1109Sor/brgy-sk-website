import Image from "next/image";
import Link from "next/link";

export default function JulianeProfile() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 px-6 py-12 font-poppins">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-left mb-6">
          <Link href="/">
            <span className="inline-flex items-center text-green-800 hover:text-green-900 transition">
              ← Back to Home
            </span>
          </Link>
        </div>
        <div className="flex justify-center mb-6">
          <Image
            src="/juliane.jpg"
            alt="Juliane P. Cuayson"
            width={160}
            height={160}
            className="rounded-full shadow-lg border-4 border-green-300"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Meet SK Kagawad Juliane P. Cuayson</h1>
        <h2 className="text-xl text-green-800 font-semibold mb-4">
          Spearheading Livelihood & Summer Job Programs
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          Juliane leads the way in empowering the youth of Barangay Taloc through practical and accessible livelihood opportunities. Her mission is to equip young people with the skills and experiences needed for future employment, self-sufficiency, and entrepreneurship.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          One of her key programs is the <strong>Summer Job Program</strong>, where she facilitates partnerships with local establishments and barangay offices to provide temporary employment for students during school breaks. This not only helps them earn income but also exposes them to real-world work environments and responsibilities.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          In addition to seasonal job placements, Juliane organizes <strong>livelihood training workshops</strong> such as basic baking, soap-making, beadwork, and digital freelancing orientations. These initiatives are tailored to equip the youth with sustainable income-generating skills they can use independently or within the community.
        </p>
      </div>
    </div>
  );
}
