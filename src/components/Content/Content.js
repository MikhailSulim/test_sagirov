import './Content.css';
import BlockContainer from '../BlockContainer/BlockContainer';
import Title from '../Title/Title';
import BtnStart from '../BtnStart/BtnStart';

function Content() {
  return (
    <div className="content">
      <div className="content__left">
        <Title />
        <BtnStart />
      </div>
      <BlockContainer />
    </div>
  );
}

export default Content;
