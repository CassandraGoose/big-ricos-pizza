import BigDeal from './BigDeal';
import Rewards from './Rewards';
import ComboDeal from './ComboDeal';
import Carryout from './Carryout';

function Deals() {
  return (
    <section className='h-big w-8/12 gap-3 grid grid-cols-10 grid-rows-6'>
      <BigDeal />
      <Rewards />
      <ComboDeal />
      <Carryout />
    </section>
  );
}

export default Deals;
