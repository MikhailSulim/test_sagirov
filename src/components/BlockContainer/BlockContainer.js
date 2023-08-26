import Block from '../Block/Block';
import './BlockContainer.css';

function BlockContainer() {
  return (
    <div className="container">
      <Block top={'мы'} middle={'1'} bottom={'на рынке'} className={'block__br'}/>
      <Block top={'гарантируем'} middle={'50%'} bottom={'безопасность'} className={'block__bl'}/>
      <Block top={'календарик  за'} middle={'2001'} submiddle={'г.'} bottom={`в подарок`} className={'block__tr'}/>
      <Block top={'путешествие'} middle={'597'} bottom={'дней'} className={'block__tl'}/>
    </div>
  );
}

export default BlockContainer;
