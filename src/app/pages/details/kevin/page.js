import Image from "next/image";
import Link from "next/link";

export default function KevinProfile() {
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
            src="/kevin.jpg"
            alt="Kevin H. Carmona"
            width={160}
            height={160}
            className="rounded-full shadow-lg border-4 border-green-300"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Meet SK Kagawad Kevin H. Carmona
        </h1>
        <h2 className="text-xl text-green-800 font-semibold mb-4">
          Spearheading Sports Development
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          Kevin is the SK Kagawad in charge of leading and organizing sports programs and initiatives in Barangay Taloc. He aims to nurture young athletes, promote physical wellness, and foster camaraderie among the youth through sports.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          From barangay leagues to inter-purok tournaments, Kevin oversees events like basketball, volleyball, and chess competitions. His leadership ensures that every activity promotes teamwork, sportsmanship, and inclusivity across all age groups.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Through training clinics, equipment distribution, and partnerships with local coaches, Kevin empowers aspiring athletes to reach their potential while instilling discipline and healthy lifestyles in the community.
        </p>
      </div>
    </div>
  );
}
