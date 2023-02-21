const {useState} = React;

const GroceryListItem = ({item}) => {
  const [isHovering, setIsHovering] = useState(false);
  const style = {fontWeight: isHovering ? 'bold' : 'normal'}
  return (
    <li style={style} onMouseEnter={() => setIsHovering(!isHovering)} onMouseLeave={() => setIsHovering(!isHovering)}>
      {item}
    </li>
  );
};

const GroceryList = ({items}) => (
  <div>
    <ul>
      {items.map((item) => (
        <GroceryListItem item={item} />
      ))}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList items={['Potatoes', 'Cheese Curds', 'SunnyD']}/>, document.getElementById("app"))