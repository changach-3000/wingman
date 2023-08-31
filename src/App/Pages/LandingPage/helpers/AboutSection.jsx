import { Link } from "react-router-dom";

function About() {
  const learnMoreColor = "#A0522D"; // Customized color for call to action button
  const signUpColor = "#A0522D"; // Customized color for sign-up button

  return (
    <section className="py-16 bg-green-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center md:justify-center md:gap-8">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFncmljdWx0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Image 2"
              className="w-full h-auto rounded-lg "
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-4xl md:text-4xl font-semibold mb-4 text-left md:text-left">
              ABOUT WINGMAN
            </h3>
            <p className="text-gray-800 text-lg md:text-1xl leading-relaxed text-left md:text-left">
              Welcome to Wingman, where we empower agricultural success
              through innovation, collaboration, and sustainability. Our
              platform connects farmers, saccos, and exporting companies,
              unlocking Africa's agricultural potential.{" "}
            </p>
            <div className="flex justify-center md:justify-start mt-6 space-x-4">
              <Link to="about-us">
              <button
                style={{ backgroundColor: learnMoreColor }}
                className="px-6 py-3 text-white rounded-full text-1xl md:text-1xl font-semibold"
              >
                Learn More
              </button>
              </Link>
              <Link to="/signup">
              <button
                style={{ backgroundColor: signUpColor }}
                className="px-6 py-3 text-white rounded-full text-1xl md:text-1xl font-semibold"
              >
                Get Started
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
