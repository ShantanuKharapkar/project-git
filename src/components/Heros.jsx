import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Heros = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.padding}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className=" flex flex-row item-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`{styles.paragraph } ml-2 font-poppins`}>
            <span className="text-white">20% Disscount For</span>{" "}
            <span className="text-white">
              {" "}
              <span className="text-gradient font-extrabold">1 Month</span>{" "}
              Account
            </span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppin font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Genration</span> Payment Method
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heros;
