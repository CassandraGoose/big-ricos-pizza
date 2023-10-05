import BigDeal from './BigDeal';
import Rewards from './Rewards';
import ComboDeal from './ComboDeal';

function Deals() {
  return (
    <div className='h-big w-8/12 gap-3 grid grid-cols-10 grid-rows-6'>
      <BigDeal />
      <Rewards />
      <ComboDeal />
      <div className='col-span-10 bg-light-grey'>im the footer</div>
    </div>
  );
}

export default Deals;
