export const DetailsInner = ({ name, info }) => {
  return (
    <div className="details-inner">
      <div className="name-info">{name}</div>
      <div className="info-inner">{info !== 'undefined' ? info : '-'}</div>
    </div>
  );
};
