import Image from "next/image";
import Link from "next/link";

export default function HannahProfile() {
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
            src="/hannah.jpg"
            alt="Hannah Lobrido"
            width={160}
            height={160}
            className="rounded-full shadow-lg border-4 border-green-300"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Meet SK Kagawad Hannah Sofea T. Lobrido</h1>
        <h2 className="text-xl text-green-800 font-semibold mb-4">Spearheading Pageants & Cultural Development</h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          Hannah takes the lead in organizing community pageants that celebrate local beauty, confidence, and cultural pride. Her leadership promotes youth empowerment by providing a platform for self-expression, talent showcase, and personality development.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          Beyond pageants, she plays a key role in planning and executing cultural events that highlight the heritage and traditions of Barangay Taloc. These events foster unity and strengthen the sense of identity among the youth and the wider community.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          With a focus on confidence-building and leadership among young women and men, Hannah ensures that every event is inclusive, inspiring, and aligned with the values of growth, respect, and community pride.
        </p>
      </div>
    </div>
  );
}
