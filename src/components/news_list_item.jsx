const NewsListItem = (props) => {
  return (
    <div key={props.item.id}>
      <h3>{props.item.title}</h3>
      <div>{props.item.feed}</div>
    </div>
  );
};

export default NewsListItem;
