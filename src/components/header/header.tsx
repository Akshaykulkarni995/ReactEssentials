const reactDesc = ["Fundament", "core", " crucial"];
//dynamic binding
function genRandom(max: number) {
  return Math.floor(Math.random() * max + 1);
}

export default function Header() {
  return (
    <header className="App-header">
      <h1>React Essentials</h1>
      {/* //dynamic binding */}
      <p>{reactDesc[genRandom(2)]} reacts concepts </p>
    </header>
  );
}