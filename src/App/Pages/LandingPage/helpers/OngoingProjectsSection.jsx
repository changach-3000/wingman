// import { Link } from "react-router-dom"

// function OngoingProjects({ blogs }) {
//   return (
//     <section className="py-16 bg-green-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-semibold mb-8 text-center">
//           Ongoing Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {blogs.map((blog) => (
//             <div key={blog.id} className="bg-white rounded-lg shadow-md p-6">
//               <img
//                 src={blog.imageUrl}
//                 alt={blog.title}
//                 className="w-full h-64 object-cover mb-4 rounded-lg"
//               />

//               <div class="w-full bg-gray-200 rounded-full dark:bg-gray-200 mb-4">
//                 <div
//                   class="text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
//                   style={{
//                     width: `${blog.progress}%`,
//                     backgroundColor: "#F4722E",
//                   }}
//                 >
//                   {blog.progress}%
//                 </div>
//               </div>

//               <p className="text-gray-600 text-center">{blog.content}</p>
//               <div className="mt-4 flex justify-center">
//                 <button
//                   style={{ backgroundColor: "#F4722E" }}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-full"
//                 >
//                   Read
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-12 flex justify-center">
//           <Link to="blogs">
//           <button
//             style={{ backgroundColor: "#F4722E" }}
//             className="bg-blue-600 text-white px-4 py-2 rounded-full"
//           >
//             View More Blogs
//           </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default OngoingProjects;
