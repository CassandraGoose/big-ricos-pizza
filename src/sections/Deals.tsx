import BigDeal from './BigDeal';
import Rewards from './Rewards';
import ComboDeal from './ComboDeal';
import Carryout from './Carryout';
import Pause from '../components/Pause';

function Deals() {
  return (
    <section className='h-big w-8/12 gap-3 grid grid-cols-10 grid-rows-6'>
      <BigDeal />
      <Rewards />
      <ComboDeal />
      <Carryout />
      <Pause />
    </section>
  );
}

export default Deals;
