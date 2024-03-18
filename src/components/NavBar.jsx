export default function NavBar() {
  const options = ["Home", "Movies", "Actors", "Details"];
  const button1 = options.map((option) => <button>{option}</button>);
  return (
    <nav className="navbar">
      {" "}
      <button>{button1}</button>{" "}
    </nav>
  );
}
