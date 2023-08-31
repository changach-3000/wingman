// import React from "react";

// const Blogs = ({ blogsData }) => {
//   return (
//     <div>
//       {blogsData &&
//         blogsData.map((blog) => (
//           <div key={blog.id} className=" rounded overflow-hidden shadow-lg m-4">
//             <img className="w-full" src={blog.imageUrl} alt={blog.title} />
//             <div className="px-6 py-4">
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
//               <div className="font-bold text-xl mb-4">{blog.title}</div>
//               <p className="text-gray-700 text-base">{blog.content}</p>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Blogs;

// // {
// //   blogs.map((blog) => (
// //     <div key={blog.id} className="bg-white rounded-lg shadow-md p-6">
// //       <img
// //         src={blog.imageUrl}
// //         alt={blog.title}
// //         className="w-full h-64 object-cover mb-4 rounded-lg"
// //       />

// //       <div class="w-full bg-gray-200 rounded-full dark:bg-gray-200 mb-4">
// //         <div
// //           class="text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
// //           style={{
// //             width: `${blog.progress}%`,
// //             backgroundColor: "#F4722E",
// //           }}
// //         >
// //           {blog.progress}%
// //         </div>
// //       </div>

// //       <p className="text-gray-600 text-center">{blog.content}</p>
// //       <div className="mt-4 flex justify-center">
// //         <button
// //           style={{ backgroundColor: "#F4722E" }}
// //           className="bg-blue-600 text-white px-4 py-2 rounded-full"
// //         >
// //           Read
// //         </button>
// //       </div>
// //     </div>
// //   ));
// // }
