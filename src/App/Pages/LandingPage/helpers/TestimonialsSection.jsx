function Testimonials() {
  return (
    <section className="py-16" style={{ backgroundColor: "#A0522D" }}>
      <div className="container mx-auto px-4 ">
        <h4 className="font-semibold mb-8 text-center">TESTIMONIALS</h4>
        <h1 className="text-4xl font-semibold mb-8 text-center text-black">
          What Clients say about us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg flex items-center rounded-bl-none rounded-tr-none">
            <img
             src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Farmer Jane Doe"
              className="w-16 h-16 rounded-lg mr-4 rounded-bl-none rounded-tr-none"
            />
            <div>
              <p className="text-gray-800">
                <p className="text-green-800 font-semibold mb-2">
                  - Farmer John Doe
                </p>
                "This platform has allowed me to expand my farm and connect with
                investors who believe in my vision. It's been a game-changer!"
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg flex items-center rounded-tr-none rounded-bl-none">
            <img
              src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Investor John Smith"
              className="w-16 h-16 rounded-lg mr-4 rounded-bl-none rounded-tr-none"
            />
            <div>
              <p className="text-green-800 font-semibold mb-2">
                - Exporter Joe Smith
              </p>
              <p className="text-gray-800">
                "As an exporter, I've found exciting projects that align with my
                values. The platform makes it easy to diversify my portfolio."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
