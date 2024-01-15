import BookIcon from "../assets/icons/book_icon.svg";
import FakeButton from "../components/FakeButton";

function MenuInvitation() {
  return (
    <section className="flex flex-col items-center md:w-8/12 w-11/12">
      <p className="text-2xl font-medium text-grey normal-case">
        Browse Our Menu
      </p>
      <div className="bg-browse-menu bg-cover bg-center flex p-2 w-full py-14 mt-6">
        <div className="flex flex-col items-center justify-center ml-8">
          <div className="h-auto w-12 mx-14 mb-6">
            <img src={BookIcon} alt="book icon" />
          </div>
          <FakeButton
            text="View Full Menu"
            bgColor="red"
            xPadding="5"
            nextPage="menu"
          />
        </div>
      </div>
    </section>
  );
}

export default MenuInvitation;
