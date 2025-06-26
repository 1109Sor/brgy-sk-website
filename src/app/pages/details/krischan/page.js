import Image from "next/image";
import Link from "next/link";

export default function KrischanProfile() {
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
            src="/krischan.jpg"
            alt="Krischan S. Gelasan"
            width={160}
            height={160}
            className="rounded-full shadow-lg border-4 border-green-300"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">
          Meet SK Treasurer Krischan S. Gelasan
        </h1>
        <h2 className="text-xl text-green-800 font-semibold mb-4">
          Engineer & Youth Infrastructure Advocate
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          Krischan brings his engineering expertise to the Sangguniang Kabataan, ensuring that all infrastructure and development projects are designed with safety, sustainability, and efficiency in mind. From sports facilities to multipurpose spaces, he contributes to a youth-friendly barangay through structurally sound and innovative solutions.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          As the SK Treasurer, he upholds transparency and accountability in all financial transactions and project fund allocations, safeguarding the integrity of SK operations.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Krischan is also the visionary behind the formation of <strong>Y'Taloc</strong> — a youth-led organization focused on civic engagement, volunteerism, and leadership development. His dedication continues to empower the next generation through structured programs and youth-centered platforms.
        </p>
      </div>
    </div>
  );
}
