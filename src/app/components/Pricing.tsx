export default function Pricing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Sip & Save with Our Cafe Membership
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Enjoy exclusive discounts and perks at your favorite cafes. Our
            membership offers you savings on every sip, every day.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Basic Plan */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Perfect for the occasional cafe-goer.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">¥1,000</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <span>5% discount at participating cafes</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Access to special members-only promotions</span>
              </li>
            </ul>
            <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Ideal for daily coffee lovers.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">¥2,500</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <span>10% discount at participating cafes</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Priority seating and skip-the-line benefits</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Exclusive invites to cafe events</span>
              </li>
            </ul>
            <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Join Premium
            </button>
          </div>

          {/* VIP Plan */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">VIP</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              The ultimate experience for devoted cafe enthusiasts.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">¥5,000</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <span>15% discount at participating cafes</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Complimentary drink every month</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Exclusive access to member-only tasting events</span>
              </li>
            </ul>
            <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Go VIP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
