export default function Sorting() {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-end">
      <select className="bg-gray-200 py-3 px-5 " name="" id="">
        <option disabled value="">
          SEÇİNİZ
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
}
