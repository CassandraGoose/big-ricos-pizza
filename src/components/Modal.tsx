import { useContext } from 'react';
import ModalContext from '../Context/ModalContext';
import Button from './Button';
import x from '../assets/x.svg';

function Modal() {
  const { setModalVisible } = useContext(ModalContext);

  return (
    <section className='z-50 flex justify-center items-center h-screen w-screen absolute bg-white/[0.7]'>
      <div className='flex flex-col h-5/6 w-5/12 bg-white border border-light-grey p-2 rounded'>
        <div className='flex justify-between'>
          <p className='text-3xl font-bold uppercase'>
            You do not need to sign in.
          </p>
          <button onClick={() => setModalVisible(false)}>
            <img className='w-4 h-4 m-2' src={x} alt='x to close' />
          </button>
        </div>
        <div className='flex flex-col justify-center items-center w-3/4 self-center uppercase text-blue text-xl text-center'>
          <p className='mt-6'>
            We already know you you are. We know everyone here.
          </p>
          <p className='my-6'>
            Rewards will be calculated and collected on the profile we keep on
            the premises at Big Rico's brick and mortar location.
          </p>
          <Button text='Start Your Order' bgColor='red' xPadding='5' />
        </div>
      </div>
    </section>
  );
}

export default Modal;
