import Image from "next/image";

export default function LocationMap() {
  return (
    <div className="bg-card-light dark:bg-background-dark/50 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-8 pb-0">
        <h3 className="text-text-light dark:text-white text-lg font-bold mb-4">
          Our Headquarters
        </h3>
      </div>
      <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 relative">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvyhDloAwe_kOYi7rZlt1VV2Fqmq946o-ouf9kY3WV3ayTrl2xC_TTDQAODk8Op9LKRFwLQNgAzy6lU0zJKFbEuEkWGVgUIs30zja5mX26I2qA2qgmFX_Gci3pxkHHyGjv94mfpHs8FLjnrESvDWNKyIlIOVCeWgw9nAtysDOphBJ8tHKKLbe5Yw0U2MFg7bAm5cOgm50jxTlyG_8mYkV9-AHkeq0QPm0W1lluayzzLLGo2YOVGG-MhhqPSTLrGZGXrYbFqYUnYaM"
          alt="Map showing the location of Flowo headquarters in Tech City"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}