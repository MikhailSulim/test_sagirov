import './Block.css';

function Block({ top, middle, submiddle, bottom, className }) {
  return (
    <div className={`block ${className}`}>
      <p className="block__top">{top}</p>
      <p className="block__middle">{middle}<span className='block__submiddle'>{submiddle}</span></p>
      <p className="block__bottom">{bottom}</p>
    </div>
  );
}

export default Block;
