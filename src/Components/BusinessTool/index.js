import React from "react";
import market2 from "../../assets/2.jpg";
// import woamn1 from '../../assets/woman.jpg'
// import woamn2 from '../../assets/woamn 2.png'

const BusinessTool = () => {
  return (
    <div className='px-[8rem] mt-[12rem] flex justify-between '>
      <div className='w-[30%]'>
        <h1 className='text-[#00085A] font-medium text-3xl '>Business Tools</h1>
        <p className='mt-5'>
          We recognize that professionalization of informal trade requires
          appropriate tooling that is fit for purpose. That's why we've built a
          range of powerful business tools for our ecosystem of clients,
          designed to streamline processes and improve efficiency.
        </p>
        <p className='mt-5'>
          Sabi's digital marketplace provides a platform for businesses to
          connect with distributors and producers to buy or sell their products
          or services online. With a user-friendly interface and customizations
          unique to the local environment, our marketplace makes it easy for
          small businesses to expand their reach and unlock their potential.
        </p>
        <p className='mt-5'>
          Sabi's digital marketplace provides a platform for businesses to
          connect with distributors and producers to buy or sell their products
          or services online. With a user-friendly interface and customizations
          unique to the local environment, our marketplace makes it easy for
          small businesses to expand their reach and unlock their potential.
        </p>

       
      </div>
      <div className=' w-[60%]'>
        {/* <div className=''>
                <img src={maize}  alt='maize'/>
        </div> */}
        <div className=''>
          <img src={market2} alt='maize' />
        </div>
        {/* <div className=''>
                <img src={woamn2}  alt='maize'/>
        </div> */}
      </div>
    </div>
  );
};

export default BusinessTool;
