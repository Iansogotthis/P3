export default function NavBar() {
  const options = ["Home", "Stories", "New Story", "Search"];
  const button1 = options.map((option) => <button>{option}</button>);
  return <div className="navbar">{button1}</div> 
}
