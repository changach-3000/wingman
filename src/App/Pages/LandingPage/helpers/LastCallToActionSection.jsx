import { Link } from "react-router-dom";

function LastCallToAction() {
  return (
    <div className="p-16 bg-green-100">
      <div
        className="text-white py-16 rounded-lg"
        style={{ backgroundColor: "#A0522D" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-center">
          Don't miss out on this incredible opportunity
          </h2>
          <p className="text-center">
          Join thousands of thriving businesses that have harnessed the power of "Tustock Growers Investment Platform" to achieve unparalleled success. Take your business to new heights with confidence and security!
          </p>
          <div className="mt-8 flex justify-center">
          <Link to="about-us">
            <button
              className="px-6 py-3 rounded-lg font-semibold"
              style={{ backgroundColor: "#005A31" }}
            >
              Get Started Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastCallToAction;
