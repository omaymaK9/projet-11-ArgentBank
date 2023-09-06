import React from 'react'
import Banner from '../../components/Banner/Banner'
import Feature from '../../components/Feature/Feature'
import './Home.css'

import IconChat from '../../assets/icon-chat.webp'
import IconMoney from '../../assets/icon-money.webp'
import IconSecurity from '../../assets/icon-security.webp'


function Home() {
  return (

    <div>
      <Banner />
      <div className='Features'>
        <Feature
          iconSrc={IconChat}
          iconAlt="Chat Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        

        <Feature
          iconSrc={IconMoney}
          iconAlt="Money Icon"
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />


        <Feature
          iconSrc={IconSecurity}
          iconAlt="Security Icon"
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </div>
    </div>
  );
};

export default Home;