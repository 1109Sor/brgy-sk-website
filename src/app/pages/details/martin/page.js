import Image from "next/image";
import Link from "next/link";

export default function MartinProfile() {
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
            src="/martin.jpg"
            alt="Martin B. Malunes"
            width={160}
            height={160}
            className="rounded-full shadow-lg border-4 border-green-300"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">
          Meet SK Kagawad Martin B. Malunes
        </h1>
        <h2 className="text-xl text-green-800 font-semibold mb-4">
          Spearheading Gender Sensitivity Campaigns
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          Martin actively promotes gender equality and inclusivity through comprehensive gender sensitivity seminars, awareness campaigns, and safe space dialogues. His initiatives aim to empower the youth to embrace diversity, eliminate gender-based discrimination, and foster mutual respect across all sectors of the community.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          With a strong commitment to advocacy, Martin collaborates with schools, barangay units, and local organizations to integrate gender education into youth leadership, encouraging a culture where every individual—regardless of gender identity—is seen, heard, and supported.
        </p>
      </div>
    </div>
  );
}
