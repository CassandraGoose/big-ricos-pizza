import { Link } from 'react-router-dom';

function FakeButton({
  text,
  xPadding,
  bgColor,
  nextPage,
}: {
  text: string;
  xPadding: string;
  bgColor: string;
  nextPage: string;
}) {
  const bgColors: { [key: string]: string } = {
    red: 'bg-red',
    blue: 'bg-blue',
    'dark-blue': 'bg-dark-blue',
  };

  const xPaddings: { [key: string]: string } = {
    2: 'px-2',
    3: 'px-3',
    5: 'px-5',
    14: 'px-14',
  };

  return (
    <Link to={nextPage}>
      <span
        className={`${xPaddings[xPadding]} py-3 ${bgColors[bgColor]} whitespace-nowrap
      } text-white uppercase rounded-sm`}>
        {text}
      </span>
    </Link>
  );
}

export default FakeButton;
