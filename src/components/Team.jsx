function Team({ name, onSelect }) {
  return (
    <button onClick={() => onSelect(name)}>
      {name}
    </button>
  );
}

export default Team;
