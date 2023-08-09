function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
        <span className="card-title"></span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.5rem" }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
