// import React from "react";
// import Blogs from "../Blogs";
// import Navbar from "../../helpers/Navbar";
// import Footer from "../../helpers/FooterSection";

// const DisplayBlogs = () => {
//   const blogsData = [
//     {
//       id: 1,
//       title: "A Blossoming Tea Plantation in Kapsorwa, Kericho",
//       content: (
//         <div>
//           <p>
//             Nestled within the picturesque landscapes of Kapsorwa plains in
//             Kericho, a vibrant and promising tea plantation spans across 24
//             acres of fertile land. This idyllic plantation is poised to produce
//             a harvest of exceptional tea, contributing to the rich legacy of
//             Kericho's tea industry. With its lush greenery, dedicated workforce,
//             and optimal conditions, this plantation holds the promise of
//             delivering a bountiful harvest of 1200 kg of tea.
//           </p>
//           <p>
//             <strong style={{ fontSize: "1.2rem" }}>
//               Tea, with its cultural and economic significance,
//             </strong>{" "}
//             is a captivating investment avenue. With its rich history in
//             Kericho, tea cultivation has proven to be a resilient industry, with
//             a global demand that continues to rise. At Tustock Growers, you're
//             not merely investing in land; you're investing in an industry that
//             has stood the test of time.
//           </p>
//           <p>
//             <strong style={{ fontSize: "1.2rem" }}>
//               Imagine owning 24 acres of prime land
//             </strong>{" "}
//             in the serene Kapsorwa plains. This parcel is a canvas of
//             possibilities, a place where lush tea bushes sway in harmony with
//             the wind. The unique microclimate of Kericho provides an optimal
//             environment for tea cultivation, ensuring a consistent and quality
//             harvest. As an investor, you'll be part of this harmonious
//             ecosystem, reaping the rewards of nature's bounty.
//           </p>
//           <p>
//             <strong style={{ fontSize: "1.2rem" }}>
//               The 24-acre tea plantation at Tustock Growers
//             </strong>{" "}
//             is primed for success, with an anticipated harvest of 1200 kg of
//             tea. This translates into tangible returns on your investment. As
//             global tea consumption continues to rise, your involvement in this
//             venture positions you to capture a slice of a growing market.
//           </p>
//         </div>
//       ),
//       imageUrl:
//         "https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       progress: 75,
//     },

//     {
//       id: 2,
//       title: "Unveiling a Blooming Investment Opportunity",
//       content: (
//         <div>
//           <p>
//             <strong style={{ fontSize: "1.2rem" }}>
//               A sprawling flower plantation spanning 30 acres near Nakuru,
//             </strong>{" "}
//             with an expected production of 300,000 cut flowers for export.
//             Imagine a sprawling flower paradise that spans 30 acres near the
//             picturesque city of Nakuru. A mesmerizing tapestry of colors and
//             fragrances, this flower plantation is not just a sight to behold but
//             also a lucrative investment opportunity. Tustock invites you to be
//             part of this blossoming venture, as we cultivate dreams alongside
//             300,000 cut flowers for export.
//           </p>
//           <p>
//             <strong style={{ fontSize: "1.2rem" }}>
//               A Symphony of Colors and Fragrances:
//             </strong>{" "}
//             Nestled near the serene city of Nakuru, this flower plantation is a
//             living canvas that celebrates nature's finest artistry. Acres of
//             vibrant petals sway in harmony with the gentle breeze, creating a
//             visual spectacle that captivates hearts and imaginations alike. From
//             roses that whisper tales of romance to lilies that exude elegance,
//             the plantation promises an exquisite diversity that adds a touch of
//             beauty to the world.
//           </p>
//           <p>
//             <strong style={{ fontSize: "1.2rem" }}>
//               Cultivating Prosperity:
//             </strong>{" "}
//             The allure of this investment goes beyond aesthetics. With an
//             anticipated production of 300,000 cut flowers, this plantation holds
//             the promise of robust financial returns. Each bloom harvested
//             carries the potential for export, tapping into a global market that
//             appreciates the elegance and charm of fresh-cut flowers. Your
//             investment stands to benefit not only from the splendor of nature
//             but also from a lucrative export avenue.
//           </p>
//           <p>
//             <strong style={{ fontSize: "1.2rem" }}>Export Potential:</strong>{" "}
//             Flowers transcend borders, cultures, and languages. They carry with
//             them emotions, expressions, and the universal language of beauty. By
//             investing with Tustock in this flower plantation, you're not just
//             sowing seeds; you're cultivating international connections. The
//             300,000 cut flowers destined for export are a testament to the
//             global demand for nature's art, and you have the opportunity to be
//             part of this enchanting journey.
//           </p>
//         </div>
//       ),
//       imageUrl:
//         "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       progress: 55,
//     },

//     {
//       id: 3,
//       title: (
//         <strong style={{ fontSize: "1.2rem" }}>
//           Nurturing Prosperity: The Tale of Eldoret's Thriving Dairy Farm
//         </strong>
//       ),
//       content: (
//         <div>
//           <p>
//             <strong style={{ fontSize: "1.2rem" }}>
//               A thriving 100-acre dairy farm surrounded by picturesque
//               landscapes in Eldoret,
//             </strong>{" "}
//             foreseeing 10,000 liters of high-quality milk monthly. In the heart
//             of Eldoret's serene landscapes, a remarkable journey of growth and
//             sustenance unfolds. Imagine a vast 100-acre dairy farm that embraces
//             the beauty of nature while envisioning a future of abundance. This
//             is not just a farm; it's a thriving haven of dairy excellence,
//             poised to deliver 10,000 liters of high-quality milk each month.
//             Join us as we delve into the story of this picturesque sanctuary and
//             the bountiful opportunities it offers.
//           </p>
//           <p>
//             <strong style={{ fontSize: "1.2rem" }}>
//               A Landscape of Promise:
//             </strong>{" "}
//             Nestled amidst picturesque vistas, the 100-acre dairy farm in
//             Eldoret stands as a testament to the synergy between nature and
//             agriculture. Here, rolling hills meet verdant pastures, creating an
//             idyllic backdrop for a farm that's more than just a business
//             venture. It's a harmonious ecosystem where cows graze contentedly,
//             and the land yields its riches in the form of nourishing milk.
//           </p>
//           <p>
//             <strong style={{ fontSize: "1.2rem" }}>
//               The Promise of Quality:
//             </strong>{" "}
//             Quality is the cornerstone of this thriving dairy farm. With a
//             foresight that extends to producing 10,000 liters of high-quality
//             milk each month, this venture sets a benchmark for excellence. The
//             cows are cared for with dedication and expertise, ensuring their
//             well-being translates into superior milk production. It's a promise
//             to consumers that every drop of milk is a testament to the farm's
//             commitment to quality.
//           </p>
//           <p>
//             <strong style={{ fontSize: "1.2rem" }}>
//               Embracing Sustainability:
//             </strong>{" "}
//             Beyond milk production, this dairy farm champions sustainability.
//             The pristine landscapes serve as a reminder of our responsibility to
//             nurture the environment while reaping its rewards. Through
//             eco-friendly practices, waste reduction, and responsible resource
//             management, the farm thrives in harmony with the land. Your
//             investment here isn't just about profit; it's about fostering a
//             sustainable legacy.
//           </p>
//         </div>
//       ),
//       imageUrl:
//         "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//       progress: 85,
//     },
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className="my-6">
//         <h1 className="text-4xl font-bold text-center text-black ">
//           Our Project Blogs
//         </h1>
//       </div>
//       <div className="container-sm mx-auto px-4">
//         <Blogs blogsData={blogsData} />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default DisplayBlogs;
