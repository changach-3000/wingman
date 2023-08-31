function FlexibleContent() {
  return (
    <div class="bg-green-100 py-8">
      <div class="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        <div class="lg:flex lg:items-center lg:w-1/2 p-4">
          <div class="lg:mr-8">
            <h2 class="text-3xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p class="text-gray-600">
              Driving economic growth and uplifting farming communities across
              Africa through agricultural investments. We foster dynamic
              partnerships, empower farmers, and offer transparent investment
              opportunities.{" "}
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1612170153139-6f881ff067e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Content Image"
            class="w-full h-48 object-cover rounded-lg lg:w-80"
          />
        </div>

        <div class="mt-8 lg:flex lg:items-center lg:w-1/2 lg:flex-row-reverse p-4">
          <div class="lg:ml-8">
            <h2 class="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p class="text-gray-600">
              Revolutionizing agricultural investments, we connect farmers with
              capital and investors to fuel Africa's agricultural growth. With
              cutting-edge technology and responsible practices, we elevate the
              industry and create lasting impact.{" "}
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556316918-880f9e893822?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Content Image"
            class="w-full h-48 object-cover rounded-lg lg:w-80"
          />
        </div>
      </div>
    </div>
  );
}

export default FlexibleContent;
