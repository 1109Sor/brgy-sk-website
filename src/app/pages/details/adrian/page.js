import Image from "next/image";
import Link from "next/link";

export default function AdrianProfile() {
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
            src="/adrian.jpg"
            alt="Adrian M. Cobrador"
            width={160}
            height={160}
            className="rounded-full shadow-lg border-4 border-green-300"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Meet SK Kagawad Adrian M. Cobrador</h1>
        <h2 className="text-xl text-green-800 font-semibold mb-4">Spearheading IT-Related Initiatives</h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          Adrian is the driving force behind the SK Council’s digital transformation, leading IT-based initiatives such as digital tool development, social media strategies, and technology-focused youth workshops.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          He manages the sound and lighting systems for every SK event, ensuring high-quality audio-visual experiences that uplift the atmosphere and audience engagement during programs.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Adrian also maintains the security and integrity of the SK’s official social media pages, monitoring content, engagement, and safeguarding platforms to uphold responsible communication and transparency.
        </p>
      </div>
    </div>
  );
}
