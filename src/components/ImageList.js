import Image from './Image';

function ImageList({ profiles }) {
  return (
    <div className="row" data-testid="image-list">
      {profiles.map((item) => (
        <Image key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ImageList;
