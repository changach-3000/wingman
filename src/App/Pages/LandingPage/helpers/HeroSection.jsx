function Hero({ stats }) {
  return (
    <div className="banner relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#DCFCEF"
          fill-opacity="1"
          d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,170.7C672,192,768,224,864,229.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-6xl font-bold tracking-tight sm:text-4xl text-center">
              Wingman
            </h2>
            <p className="mt-6 text-center text-1xl leading-relaxed">
             Let's Go kuku!
             This is a system that is aimed to boost poultry farming in kenya, by providing farmers with resources and support to get them started in the poultry rearing.This is achieved by providing training, vaccinations, financial aid and a marketplace.
              </p>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              class="bg-green-200 p-6 rounded-lg text-center shadow-md opacity-80 transition-opacity"
            >
              <h3
                class="text-xl font-semibold mb-2"
                style={{ color: "#005A31z" }}
                z
              >
                {stat.name}
              </h3>
              <p class="text-4xl font-bold" style={{ color: "#005A31z" }}>
                {stat.value}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Hero;
