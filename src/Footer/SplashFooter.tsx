import LinkAccordions from './LinkAccordions';
import LegalAccordions from './LegalAccordions';
import FooterLinks from './FooterLinks';
import SupporterLogos from './SupporterLogos';

function SplashFooter() {
  return (
    <section className='mt-4'>
      <div className='bg-light-grey text-dark-grey flex justify-center items center md:py-16'>
        <div className='md:w-8/12 w-full flex flex-col items-center justify-between'>
          <LinkAccordions />
          <FooterLinks />
          <SupporterLogos />
          <LegalAccordions />
        </div>
      </div>
    </section>
  );
}

export default SplashFooter;
