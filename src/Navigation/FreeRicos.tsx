function FreeRicos({ light }: { light: boolean }) {
  const lightTopfin =
    'border-t-white border-r-blue border-b-white border-l-white';
  const lightBottomfin =
    'border-r-white border-t-white border-l-white border-b-blue';
  const lightNose =
    'border-t-white border-b-white border-r-white border-l-blue';
  const lightBody = 'bg-blue text-white';

  const darkTopfin = 'border-t-blue border-r-white border-b-blue border-l-blue';
  const darkBottomfin =
    'border-r-blue border-t-blue border-l-blue border-b-white';
  const darkNose = 'border-t-blue border-b-blue border-r-blue border-l-white';
  const darkBody = 'bg-white text-blue';

  const innerTopFinLight =
    'border-t-blue border-r-red border-b-blue border-l-blue';
  const innerBottomFinLight =
    'border-r-blue border-t-blue border-l-blue border-b-red';
  const innerNoseLight =
    'border-t-blue border-b-blue border-r-blue border-l-red';

  const innerTopFinDark =
    'border-t-white border-r-red border-b-white border-l-white';
  const innerBottomFinDark =
    'border-r-white border-t-white border-l-white border-b-red';
  const innerNoseDark =
    'border-t-white border-b-white border-r-white border-l-red';

  return (
    <span className='flex'>
      <div className='flex flex-col justify-right'>
        <span
          className={`block w-0 h-0 border-solid border-t-0 border-r-[1.4rem] border-b-[1.4rem] border-l-0 ${
            light ? lightTopfin : darkTopfin
          }`}></span>
        <span
          className={`block w-0 h-0 border-solid border-t-0 border-b-[1.33rem] border-l-[1.4rem] border-r-0 ${
            light ? lightBottomfin : darkBottomfin
          }`}></span>
      </div>
      <span
        className={`flex flex-col justify-center items-center ${
          light ? lightBody : darkBody
        } h-1/2 text-xs px-2 py-1`}>
        <span className='flex justify-center items-center whitespace-nowrap'>
          Now, earn
          <div className='flex mx-1'>
            <div className='flex flex-col justify-right'>
              <span
                className={`block w-0 h-0 border-solid border-t-0 border-r-[0.5rem] border-b-[0.5rem] border-l-0 ${
                  light ? innerTopFinLight : innerTopFinDark
                }`}></span>
              <span
                className={`block w-0 h-0 border-solid border-t-0 border-b-[0.48rem] border-l-[0.5rem] border-r-0 ${
                  light ? innerBottomFinLight : innerBottomFinDark
                }`}></span>
            </div>
            <span className='text-xxs bg-red text-white h-1/2 px-1'>free</span>
            <span
              className={`block w-0 h-0 border-solid border-t-[0.5rem] border-b-[0.5rem] border-l-[0.5rem] border-r-0 ${
                light ? innerNoseLight : innerNoseDark
              }`}></span>
          </div>
          Rico's
        </span>
        <span className='text-xxs font-light tracking-widest'>
          every 2 orders
        </span>
      </span>
      <span
        className={`block w-0 h-0 border-solid border-t-[1.35rem] border-b-[1.35rem] border-l-[1.35rem] border-r-0 ${
          light ? lightNose : darkNose
        }`}></span>
    </span>
  );
}

export default FreeRicos;
