import { Link } from "react-router-dom";

function Info() {
  const learnMoreColor = "#A0522D"; // Customized color for call to action button

  return (
    <section className="py-16 bg-green-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-center md:gap-8">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-4xl md:text-4xl font-semibold mb-4 text-left md:text-left">
              Why Choose Wingman?
            </h3>
            <p className="text-gray-800 text-lg md:text-1xl leading-relaxed text-left md:text-left">
              Choose Wingman for a thriving poultry investment
              experience, offering diverse opportunities, market insights,
              secure transactions, farmer empowerment, and fruitful
              partnerships.{" "}
            </p>
            <div className="flex justify-center md:justify-start mt-6 space-x-4">
            <Link to="about-us">
              <button
                style={{ backgroundColor: learnMoreColor }}
                className="px-6 py-3 text-white rounded-full text-2xl md:text-1xl font-semibold"
              >
                Learn more
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
