export default function Status({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          <em>Start adding some items to your packing list... 🚘</em>
        </p>
      );
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? `You got everything packed!`
            : `You have {numItems} items in you inventory, and you already packed 
            ${numPacked} items (${percentage}%)`}
          🎒
        </em>
      </footer>
    );
  }