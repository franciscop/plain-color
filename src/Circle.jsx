export default function Circle({ name, hex, white }) {
  const text = white ? "fff" : "000";
  const link = "/" + (name || hex);
  const color = hex ? "#" + hex : name;
  const content = name || (
    <>
      {hex.slice(0, 3)}
      <br />
      {hex.slice(3)}
    </>
  );
  return (
    <li>
      <a href={link} style={`background: ${color}; color: #${text};`}>
        {content}
      </a>
    </li>
  );
}
