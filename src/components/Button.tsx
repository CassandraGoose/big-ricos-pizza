function Button({
  text,
  px,
  py,
  bgColor,
  textColor,
  wrap,
}: {
  text: string;
  px: number;
  py: number;
  bgColor: string;
  textColor: string;
  wrap: string
}) {
  return (
    <button className={`px-${px} py-${py} bg-${bgColor} text-${textColor} uppercase ${wrap} rounded-sm`}>
      {text}
    </button>
  );
}

export default Button;
