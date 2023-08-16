const CreatorCard = ({ id, name, url, imageURL, desc }) => {
  return (
    <article className="card">
      <img className="user" src={imageURL}></img>
      <h2>{name}</h2>
      <p>@{url}</p>

      <p>{desc}</p>
      <div className="button-group">
        <a href={`/creators/view/${id}`}>
          <button>View</button>
        </a>
        <a href={`/creators/edit/${id}`}>
          <button>Edit</button>
        </a>
      </div>
    </article>
  );
};

export default CreatorCard;
