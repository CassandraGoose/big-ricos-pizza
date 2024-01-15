import nvccLogo from '../assets/icons/nvcc.webp';
import nvcrLogo from '../assets/icons/nvcr.webp';
import sspLogo from '../assets/icons/ssp.webp';

function SupporterLogos() {
  return (
    <div className='flex w-full justify-start items-center mb-10 md:mt-0 mt-10'>
      <img
        className='md:h-40 h-20 w-auto'
        src={nvccLogo}
        alt='night vale city council approves logo'
      />
      <img
        className='md:h-40 h-20 w-auto ml-12'
        src={nvcrLogo}
        alt='night vale community radio sponsor logo'
      />
      <img
        className='md:h-40 h-20 w-auto ml-12'
        src={sspLogo}
        alt="sheriff's secret police logo"
      />
    </div>
  );
}

export default SupporterLogos;
