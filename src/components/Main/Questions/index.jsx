const Questions = ({
  id,
  title,
  category,
  linkUrl,
  response,
  selectCategory,
}) => {
  return (
    <div className="leading-9 cursor-pointer">
      {selectCategory === category ? <p>{title}</p> : ""}
    </div>
  );
};

export default Questions;
