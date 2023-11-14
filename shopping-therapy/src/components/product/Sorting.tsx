interface SortItems {
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sorting({ setSort }: SortItems) {
  return (
    <div className="lg:col-span-3 md:col-span-4 md:text-end">
      <label className="font-semibold hidden"></label>
      <select
        onChange={(e) => setSort(e.target.value)}
        className="form-select form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-600 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
      >
        <option selected>Sırala</option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
}
