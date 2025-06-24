import Link from "next/link";
import Image from "next/image";

export default function Edukit2024Page() {
  const imageNames = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg", // Add more as you add new files
  ];

  return (
    <div className="min-h-screen bg-white font-poppins py-12 px-6">
      <Link href="/achievements" className="text-green-700 text-sm hover:underline mb-4 block">
        ← Back to Achievements
      </Link>

      <h1 className="text-3xl font-bold text-green-900 mb-4">2024 SK Project EduKit</h1>
      <p className="text-green-800 text-sm mb-8">
        In 2024, the SK Taloc distributed over 500 school kits to students. This project aimed to assist underprivileged youth by providing basic school supplies...
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imageNames.map((name, index) => (
          <div key={index} className="w-full h-64 relative rounded-lg overflow-hidden border">
            <Image
              src={`/edukit/${name}`}
              alt={`Edukit Photo ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
