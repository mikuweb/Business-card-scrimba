export const Contents = ({ title, content }) => {
  return (
    <div className="contents__container">
      <h2 className="contents__title">{title}</h2>
      <p className="contents__content">{content}</p>
    </div>
  );
};
