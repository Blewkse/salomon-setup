import "../style/layout.css";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <input placeholder="Search for equipment..." type="text" />
      <img src="/magnifyingglass.svg" alt="Search icon" />
    </div>
  );
}
