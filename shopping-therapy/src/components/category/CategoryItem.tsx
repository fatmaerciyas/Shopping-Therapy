// //import { useState } from "react";

// import { Category } from "../../models/Category";

// interface CategoryItem {
//   category: Category;
// }

// export default function CategoryItem({ category }: CategoryItem) {
//   const [category, setCategory] = useState<CategoryItem>({});
//   // const [sort, setSort] = useState("");
//   //const { categories } = props;
//   console.log(category.name);
//   return (
//     <>
//       <div className="block mt-2">
//         <div>
//           <label className="inline-flex items-center">
//             <input
//               onClick={() => setCategory(category)}
//               type="radio"
//               className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
//               name="radio-colors"
//               value="1"
//               checked
//             />
//             <span className="text-slate-400">{category.name}</span>
//           </label>
//         </div>
//       </div>
//     </>
//   );
// }
