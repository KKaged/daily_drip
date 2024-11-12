export default function Hero2() {
  return (
    <section>
      <div className="gap-16 items-center py-12 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-600 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Savor Your Daily Coffee, Affordably
          </h2>
          <p className="mb-4">
            Discover new cafes and enjoy your favorite coffee at exclusive
            discounts every day with Daily Drip. Our community connects coffee
            lovers to participating cafes across Japan, allowing you to indulge
            while saving.
          </p>
          <p>
            Whether you’re a busy professional, a student, or a coffee
            enthusiast, Daily Drip lets you sip smarter. Join us and start
            exploring unique flavors, one cup at a time.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg shadow-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="Cafe ambiance 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg shadow-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="Cafe ambiance 2"
          />
        </div>
      </div>
    </section>
  );
}
