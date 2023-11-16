import placeholderLogo from '../assets/placeholder.webp';
import placeHolderRadio from '../assets/placeholder_radio.png';
import placeHolderSheriff from '../assets/placeholder_sheriff.png';

function SupporterLogos() {
  return (
    <div className='flex w-full justify-start items-center'>
      <img
        className='h-44 w-auto'
        src={placeholderLogo}
        alt='night vale city council approves logo'
      />
      <img
        className='h-32 w-auto'
        src={placeHolderRadio}
        alt='night vale community radio sponsor logo'
      />
      <img
        className='h-32 w-auto'
        src={placeHolderSheriff}
        alt="sheriff's secret police logo"
      />
    </div>
  );
}

export default SupporterLogos;
