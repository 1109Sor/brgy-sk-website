import Link from "next/link";
import Image from "next/image";

export default function SummerJob2024Page() {
  const imageNames = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg" // Add more as needed
  ];

  return (
    <div className="min-h-screen bg-white font-poppins py-12 px-6">
      <Link
        href="/achievements"
        className="text-green-700 text-sm hover:underline mb-4 block"
      >
        ← Back to Achievements
      </Link>

      <h1 className="text-3xl font-bold text-green-900 mb-4">
        Summer Job Program – Year 2 (2025)
      </h1>

      <p className="text-green-800 text-sm mb-4">
        The second wave of the SK Summer Job Program was held from June 9 to 13, 2025. This weeklong initiative aimed to provide local youth with valuable work experience, enhance their community involvement, and offer financial assistance during their school break. A total of 40 participants were selected and deployed to various offices and community tasks in Barangay Taloc.
      </p>

      <p className="text-green-800 text-sm mb-8">
        To formally conclude the program, a simple payroll distribution ceremony took place on Sunday, June 15, 2025, at the Barangay Hall of Taloc. The event recognized the efforts of each participant and served as a testament to the SK’s continued efforts in empowering and engaging the youth through meaningful and developmental opportunities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imageNames.map((name, index) => (
          <div
            key={index}
            className="w-full h-64 relative rounded-lg overflow-hidden border"
          >
            <Image
              src={`/summerjob/${name}`}
              alt={`Summer Job Photo ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
