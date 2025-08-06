const DropZone = ({ type, onDrop }) => {
  const allowDrop = (e) => e.preventDefault();

  const handleDrop = (e) => {
    const data = e.dataTransfer.getData('item');
    const item = JSON.parse(data);
    onDrop(item, type);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={allowDrop}
      style={{
        width: '200px',
        height: '300px',
        border: '3px dashed var(--color-dark)',
        borderRadius: '15px',
        margin: '1rem',
        textAlign: 'center',
        paddingTop: '1rem',
        fontFamily: 'var(--font-montserrat)',
        backgroundColor: 'var(--color-secondary)',
        color: 'white',
      }}
    >
      Drop {type} food here
    </div>
  );
};

export default DropZone;