import "../style/layout.css";
import SearchBar from "./SearchBar";

export default function Layout() {
  return (
    <div className="webview">
      <div className="header">
        <img src="/person-fill.svg" alt="profile icon" />
        <SearchBar />
      </div>
    </div>
  );
}
