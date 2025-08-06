const Fooditems = ({ item }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('item', JSON.stringify(item));
  };

  return (
    <img
      src={item.image}
      alt={item.name}
      draggable
      onDragStart={handleDragStart}
      style={{ width: '100px', margin: '1rem' }}
    />
  );
};

export default Fooditems;