import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center">
        <Image
          src="/error-img.jpg"
          alt="Error"
          width={400}
          height={300}
          className="mx-auto w-full h-auto object-contain"
          priority
        />

        <h1 className="text-2xl md:text-3xl font-bold mt-6">Page Not Found</h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link href="/">
          <button className="mt-6 bg-[#CAEB66] hover:bg-[#bfe85a] transition px-6 py-3 rounded-xl font-semibold">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
