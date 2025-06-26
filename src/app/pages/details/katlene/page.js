import Image from "next/image";
import Link from "next/link";

export default function KatleneProfile() {
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
            src="/katlene.jpg"
            alt="Katlene Ann M. Paredes"
            width={160}
            height={160}
            className="rounded-full shadow-lg border-4 border-green-300"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Meet SK Kagawad Katlene Ann M. Paredes</h1>
        <h2 className="text-xl text-green-800 font-semibold mb-4">Spearheading Education</h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          Katlene is deeply committed to youth education and development. As the SK Kagawad spearheading the education committee, she leads various academic programs and literacy campaigns that aim to uplift students in Barangay Taloc.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          One of her flagship initiatives is the <strong>EduKit Distribution Program</strong>, where she coordinates the provision of essential school supplies such as notebooks, pens, papers, and learning kits to underprivileged students every school year. This ensures that no child is left behind due to lack of materials.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Katlene also organizes <strong>after-school tutorials</strong>, <strong>reading sessions</strong>, and <strong>scholarship information drives</strong> to help students boost their academic performance and gain access to further opportunities. Her leadership reflects a firm belief that education is a powerful tool to break the cycle of poverty and create long-term community impact.
        </p>
      </div>
    </div>
  );
}
