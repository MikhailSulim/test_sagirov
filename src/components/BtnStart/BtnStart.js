import './BtnStart.css';

function BtnStart() {
  return (
    <div className='btn-start'>
      <div className="btn-start__container">
        <div className="btn-start__shine" />
        <button className="btn-start__btn">Начать путешествие</button>
      </div>
      <div className="btn-start__line" />
    </div>
  );
}

export default BtnStart;
