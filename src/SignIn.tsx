import Button from "./components/Button";

function SignIn() {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-3xl font-bold uppercase">
          You do not need to sign in.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-3/4 self-center uppercase text-blue text-xl text-center">
        <p className="mt-6">
          We already know you you are. We know everyone here.
        </p>
        <p className="my-6">
          Rewards will be calculated and collected on the profile we keep on
          the premises at Big Rico's brick and mortar location.
        </p>
        <Button text="Start Your Order" bgColor="red" xPadding="5" />
      </div>
    </div>
  );
}

export default SignIn;
