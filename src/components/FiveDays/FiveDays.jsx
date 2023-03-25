import './FiveDays.css';
import { Day } from '../Day/Day';
import more from '../../img/more.svg';

export const FiveDays = ({ obj }) => {
  let open = false;
  function btnClick(event) {
    let target = event.target.parentElement.previousElementSibling;
    if (!open) {
      target.classList.add('open');
      event.target.classList.add('rotate');
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 600);
    } else {
      target.classList.remove('open');
      event.target.classList.remove('rotate');
    }
    open = !open;
  }
  if (!obj) {
    return <></>;
  }
  return (
    <>
      <h2 style={{ margin: '20px auto', color: '#fff' }} className="more-days">
        More Days
      </h2>
      <div className="days-container">
        {obj.list.map((elem, index) => (
          <Day info={elem} key={index} />
        ))}
      </div>
      <div className="btn-container">
        <img
          className="btn"
          onClick={(event) => {
            btnClick(event);
          }}
          src={more}
          alt="img"
        />
      </div>
    </>
  );
};
