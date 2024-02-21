import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    
    const ref = useRef(null);
    const data=[{
        no:96,
        rank:"ST",
        country:"https://cdn-icons-png.flaticon.com/128/197/197560.png",
        photo:"https://clipart.info/images/ccovers/1630349437kylian-mbappe-png-psg-one-zero.png",
        name:"MBAPPE",
        pac:99,
        sho:95,
        pas:90,
        dri:98,
        def:44,
        phy:88

    },
    {
        no:91,
        rank:"MF",
        country:"https://cdn-icons-png.flaticon.com/512/197/197583.png",
        photo:"https://www.mancity.com/meta/media/z00hnhu0/kevin-de-bruyne.png",
        name:"DE BRUYNE",
        pac:72,
        sho:88,
        pas:94,
        dri:87,
        def:65,
        phy:78
    },
    {
        no:97,
        rank:"GK",
        country:"https://cdn-icons-png.flaticon.com/128/197/197560.png",
        photo:"https://www.footyrenders.com/render/GianluigiBuffon2.png",
        name:"BUFFON",
        pac:96,
        sho:90,
        pas:76,
        dri:65,
        def:97,
        phy:95
        
    },
    {
        no:90,
        rank:"MF",
        country:"https://cdn-icons-png.flaticon.com/128/197/197573.png",
        photo:"https://www.pngall.com/wp-content/uploads/9/Angel-Di-Maria-PNG-HD-Image-180x180.png",
        name:"DE MARIYA",
        pac:96,
        sho:90,
        pas:76,
        dri:65,
        def:97,
        phy:95
        
    },
    {
      no:90,
      rank:"GK",
      country:"https://cdn-icons-png.flaticon.com/128/197/197573.png",
      photo:"https://www.pngall.com/wp-content/uploads/9/Angel-Di-Maria-PNG-HD-Image-180x180.png",
      name:"DE MARIYA",
      pac:96,
      sho:90,
      pas:76,
      dri:65,
      def:97,
      phy:95
      
  }
];


  return (
    <>
      <div ref={ref} className="w-full h-full top-0 left-0 h-screen bg-transparent z-[3] fixed flex flex-wrap gap-5 p-5">
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
      </div>
    </>
  );
};

export default Foreground;
