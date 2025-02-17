import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const StatsCounter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="w-[90%] h-auto bg-purple-200 p-6 mt-5 lg:ml-20 shadow-xl rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-56 p-3">
          {/* Users Counter */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images/user.jpg"
              className="w-16 h-16 md:w-12 md:h-12"
              alt="Users"
            />
            <p className="p-1 lg:text-lg md:text-base font-semibold">
              <CountUp start={0} end={150} duration={4} delay={5} />+
              <br />
              Registered Users Until Today
            </p>
          </div>

          {/* Orders Counter */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images/Orders.jpg"
              className="w-16 h-16 md:w-12 md:h-12"
              alt="Orders"
            />
            <p className="lg:text-lg md:text-base font-semibold">
            <CountUp start={0} end={1500} duration={4} delay={5} />+
              <br />
              Total Orders
            </p>
          </div>

          {/* Items Counter */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images/Items.png"
              className="w-16 h-16 md:w-12 md:h-12"
              alt="Items"
            />
            <p className="lg:text-lg md:text-base font-semibold">
             <CountUp start={0} end={200} duration={4} delay={5} />+
              <br />
              Items Available
            </p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default StatsCounter;
