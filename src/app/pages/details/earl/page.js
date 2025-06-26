import Image from "next/image";
import Link from "next/link";

export default function EarlProfile() {
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
            src="/earl.jpg"
            alt="Earl John M. Paildan"
            width={160}
            height={160}
            className="rounded-full shadow-lg border-4 border-green-300"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Meet SK Kagawad Earl John M. Paildan</h1>
        <h2 className="text-xl text-green-800 font-semibold mb-4">Spearheading Good Governance</h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          Earl upholds the values of transparency, accountability, and participatory governance. He actively promotes civic education and encourages the youth to engage in responsible leadership and decision-making within the community.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
          As the coordinator of <strong>"Y'Taloc"</strong>, a youth-driven organization in Barangay Taloc, Earl facilitates leadership development, volunteer engagement, and youth-led community initiatives. The organization serves as a platform for young individuals to voice out concerns and contribute to positive change.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Earl also leads the management of <strong>SK Elections</strong> and related processes, ensuring fair and organized participation. He is responsible for preparing essential documentation, overseeing voter registration efforts, and assisting in compliance with SK electoral requirements—ensuring that the local youth council remains transparent and efficient.
        </p>
      </div>
    </div>
  );
}
