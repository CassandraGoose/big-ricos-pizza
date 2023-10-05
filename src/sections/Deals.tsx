import BigDeal from './BigDeal';
import Rewards from './Rewards';

function Deals() {
  return (
    <div className='h-big w-8/12 gap-3 grid grid-cols-10 grid-rows-6'>
      <BigDeal />
      <Rewards />
      <div className='col-start-7 row-start-3 row-end-5 col-end-11 bg-light-grey'>
        im the little bottom one
      </div>
      <div className='col-span-10 bg-light-grey'>im the footer</div>
    </div>
  );
}

export default Deals;
