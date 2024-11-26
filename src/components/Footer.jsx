import Logo from "./Logo";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-blue-500 py-3">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <Logo />
          <p className="text-2xl font-semibold">&copy; Shahid Afridi</p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
