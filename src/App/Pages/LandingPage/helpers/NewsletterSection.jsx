function Newsletter() {
  return (
    <section className="py-16 bg-green-100">
      {/* Use "bg-[color]" to apply a custom background color */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Join Our Newsletter
        </h2>
        <div className="max-w-lg mx-auto">
          <p className="text-gray-600 text-center">
            Stay up-to-date with the latest news, offers, and promotions. Join
            our newsletter and never miss out on exciting updates.
          </p>
          <div className="mt-6 flex items-center">
            <input
              type="email"
              className="bg-white focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-l-lg px-4 py-2 w-full rounded-bl-lg rounded-bl-none"
              placeholder="Enter your email address"
            />
            <button
              style={{ backgroundColor: "#A0522D" }}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg rounded-tr-none"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
