function Button({
  text,
  xPadding,
  bgColor,
}: {
  text: string;
  xPadding: string;
  bgColor: string;
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
    8: 'px-8',
    14: 'px-14',
  };

  return (
    <button
      className={`${xPaddings[xPadding]} py-3 ${bgColors[bgColor]} whitespace-nowrap
      } text-white uppercase rounded-sm`}>
      {text}
    </button>
  );
}

export default Button;
