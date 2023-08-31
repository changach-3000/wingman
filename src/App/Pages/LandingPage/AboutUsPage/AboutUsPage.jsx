import React from "react";
import Navbar from "../helpers/Navbar";
import Footer from "../helpers/FooterSection";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="container mx-auto mb-4">
        <div className="my-6">
          <h1 className="text-4xl font-bold text-center text-black ">
            About Us
          </h1>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Our Company at a Glance
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <img
                src="https://thumbs.dreamstime.com/b/hand-holding-plant-green-environment-save-tha-world-212456038.jpg"
                alt="Company"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:ml-4 text-justify text-xl">
              <p>
                Welcome to TUSTOCK, your partner in empowering sustainable
                farming. As an agribusiness company, we are committed to driving
                positive change in agriculture, and we believe that achieving
                sustainable farming practices is vital for a prosperous future.
              </p>

              <p>
                Let us briefly define the contributory points that outline our
                mission:
              </p>

              <p>
                <strong>1. Revolutionizing agriculture:</strong> At TUSTOCK, we
                are dedicated to revolutionizing agriculture by embracing
                cutting-edge technologies, innovative techniques, and modern
                methodologies. We believe in the power of progress to transform
                the agricultural landscape.
              </p>

              <p>
                <strong>2. Empowering farmers:</strong> Farmers are the backbone
                of agriculture, and at TUSTOCK, we prioritize their empowerment.
                We understand that knowledge and resources are the keys to
                empowering farmers. Through comprehensive training, access to
                vital information, and skill development programs, we enable
                farmers to make informed decisions and implement best practices.
              </p>

              <p>
                <strong>
                  3. Promoting sustainability for a prosperous future:
                </strong>{" "}
                Sustainability lies at the heart of TUSTOCK's mission. We are
                committed to promoting agricultural practices that prioritize
                environmental stewardship, conserve natural resources, and
                enhance biodiversity.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-3xl font-semibold mb-4">Kuza</h2>
          <p className="text text-xl">
            Kuza is an innovative agricultural credit instrument, designed to
            finance farmer's equipment and extension services. It operates as a
            high yield bond with a low credit rating, providing farmers 15%
            interest cover for two planting and harvesting seasons, and a
            repayment tenure of up to 180 days. With a type BB- / Ba3 investment
            grade, Kuza welcomes banks and financial institutions seeking
            expansion opportunities
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-3xl font-semibold mb-4 ">
            Technology and Innovation
          </h2>
          <p className="text text-xl">
            Smart investments through TUSTOCK are revolutionizing the
            agricultural landscape by empowering farmers with data-driven
            investment decisions. In today's dynamic and rapidly changing
            market, access to real-time market insights is crucial for farmers
            to make informed and strategic choices. With TUSTOCK's advanced
            technology and data analytics, farmers gain a comprehensive
            understanding of market trends, pricing fluctuations, and demand
            patterns, enabling them to make timely and precise investment
            decisions
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-3xl font-semibold mb-4">
            Sustainability and Impact
          </h2>
          <p className="text text-xl">
            GOVERNMENT PARTNERSHIPS: In pursuit of robust economic growth, the
            creation of employment opportunities, and the assurance of food
            security for our nation, we are thrilled to announce a
            groundbreaking collaboration between the government and TUSTOCK.
            With an unwavering commitment to transparency and accountability,
            this partnership aims to harness the full potential of government
            resources to achieve our collective objectives. Embracing this
            momentous alliance, we are poised to propel our nation's economy to
            new heights, fostering an environment conducive to prosperity and
            progress. By joining forces with TUSTOCK, a visionary and.
          </p>

       
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc ml-6 text-2xl">
              <li>
                Sustainability: We are committed to environmentally conscious
                farming practices.
              </li>
              <li>
                Innovation: We continuously seek innovative solutions to
                revolutionize agriculture.
              </li>
              <li>
                Community: We foster a strong community of farmers, experts, and
                enthusiasts.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-3xl font-semibold mb-4 ">
              Technology and Innovation
            </h2>
            <p className="text text-2xl">
              Tustock Growers Investment leverages AI and data analytics to
              provide real-time insights for farmers. Our innovative approach
              helps optimize crop yield and resource management.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-3xl font-semibold mb-4">
              Sustainability and Impact
            </h2>
            <p className="text text-2xl">
              By promoting sustainable farming practices, we aim to reduce
              environmental impact and contribute to the long-term health of our
              planet.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 class="text-3xl font-semibold mb-4">Contact Us</h2>
            <p class="text text-2xl">
              We value your feedback and are here to assist you. Whether you
              have inquiries about our services, need technical support, or want
              to share your suggestions, please don't hesitate to contact us.
              <br />
              <br />
              Reach out to us at
              <a
                href="mailto:email@example.com"
                class="text-blue-500 hover:underline mx-1"
              >
                tustock@info.com
              </a>
              Or give us a call at
              <span class="text-blue-500 mx-1">123-456-7890</span>. We're always
              ready to help and eager to hear from you!
            </p>
          </div>

          <div class="text-center">
            <p class="text-2xl font-semibold mb-4">
              Ready to revolutionize your farming practices?
            </p>
            <Link to="/signup" class="inline-block">
              <button class="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    // </div>
  );
}

export default AboutUs;
