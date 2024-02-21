import React from "react";
import { motion } from "framer-motion";

const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}}>
      <div drag className={`w-56 h-64 flex-shrink-0 bg-gradient-to-tr ${data.rank=="GK"? "from-green-300 to-green-600": (data.rank=="MF"? "from-indigo-500 via-purple-500 to-pink-500": "from-orange-200 to-orange-600" ) } rounded-[20px] px-5 py-5 flex flex-col`}>
        <div className="flex justify-around w-full h-[50%] border-b-2 border-black">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="font-bold text-3xl">{data.no}</h1>
            <h2 className="font-bold">{data.rank}</h2>
            <img
              className="w-8 h-8"
              src={data.country}
              alt="Description of the image"
            />
          </div>
          <div className="flex flex-col items-center gap-1 pb-2 pt-2">
            <img
              className="w-full h-2/3 object-cover object-top "
              src={data.photo}
            />
            <h1 className="font-black text-2xl">{data.name}</h1>
          </div>
        </div>

        <div className="h-[40%] w-full flex justify-around pt-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">{data.pac} PAC</h1>
            <h1 className="font-semibold text-xl">{data.sho} SHO</h1>
            <h1 className="font-semibold text-xl">{data.pas} PAS</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">{data.dri} DRI</h1>
            <h1 className="font-semibold text-xl">{data.def} DEF</h1>
            <h1 className="font-semibold text-xl">{data.phy} PHY</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
