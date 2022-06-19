function Image(props) {
  return (
    <div>
      <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
        <div>
          <a href={props.html_url} target="_blank" rel="noreferrer">
            <img
              className="contain-fit"
              width="300"
              src={props.avatar_url}
              alt="avatar showing here"
            />
          </a>
        </div>
      </div>
      <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
        <div>
          <h2>User : {props.name} </h2>
          <p> Login : {props.login} </p>
          <p> Twitter : {props.twitter_username} </p>
          <p> Created at : {props.created_at} </p>
        </div>
      </div>
    </div>
  );
}

function ImageList({ profiles }) {
  return (
    <div className="row">
      {profiles.map((item) => (
        <Image key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ImageList;
