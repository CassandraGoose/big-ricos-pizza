import BigDeal from './BigDeal';
import Rewards from './Rewards';
import ComboDeal from './ComboDeal';
import Carryout from './Carryout';
import Pause from '../components/Pause';

function Deals() {
  return (
    <section className='h-big md:w-8/12 w-11/12 gap-3 md:grid md:grid-cols-10 md:grid-rows-6 flex flex-col'>
      <BigDeal />
      <Rewards />
      <ComboDeal />
      <Carryout />
      <Pause />
    </section>
  );
}

export default Deals;
