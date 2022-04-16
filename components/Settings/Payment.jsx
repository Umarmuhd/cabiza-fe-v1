import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "@/config/index";
import Card from '@/components/Cards/Card';

const PaymentItem = ({ name, url, image, firstText, lastText }) => {
  const [loading, setLoading] = useState(false);

  const connectHandler = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/user${url}`);

      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
  <Card title={name} image={image}>
      <p className="text-secondary_ink_lighter">
        {firstText}
      <br/><br/>
        {lastText}
      </p>

      <div className="mt-5 flex">
        <button className="bg-primary text-white px-5 py-2 rounded-2xl mr-5">
          Connect
        </button>

        <button className="text-primary text-white px-5 py-2">
          Learn more
        </button>
      </div>
  </Card>
    // <div className='px-6 py-9 rounded-2xl border border-grey_80 flex justify-between mb-6'>
    //   <span className='text-2xl font-semibold text-secondary'>{name}</span>
    //   <div className='w-[70%]'>
    //     <p className='text-sm text-grey_40'>
    //       Connecting a personal or business PayPal account will allow you to
    //       accept payments with PayPal. Each purchase made with PayPal will be
    //       deposited into your PayPal account immediately. Payments via PayPal
    //       are supported in every country except Brazil, India, Israel, Japan,
    //       Micronesia, Turkey.
    //     </p>
    //     <div className='mt-6'>
    //       <button
    //         className='rounded-lg px-8 py-4 bg-primary text-white font-semibold text-lg'
    //         disabled={loading}
    //         onClick={connectHandler}
    //       >
    //         {loading ? 'Connecting...' : <>Connect with {name}</>}
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default function Payment() {
  const gateways = [
    {
      name: 'Paypal',
      url: '/connect/stripe',
      image: '/images/paypal.png',
      firstText:
        'Connecting a personal or business PayPal account will allow you to accept payments with PayPal. Each purchase made with PayPal will be deposited into your PayPal account immediately.',
      secondText:
        'Payments via PayPal are supported in every country except Brazil, India, Israel, Japan, Micronesia, Turkey.',
    },
    {
      name: 'Stripe',
      url: '/connect/stripe',
      image: '/images/stripe.png',
      firstText:
        'Connecting a personal or business PayPal account will allow you to accept payments with PayPal. Each purchase made with PayPal will be deposited into your PayPal account immediately.',
      secondText:
        'Payments via PayPal are supported in every country except Brazil, India, Israel, Japan, Micronesia, Turkey.',
    },
    {
      name: 'Flutterwave',
      url: '/connect/stripe',
      image: '/images/paystack.png',
      firstText:
        'Connecting a personal or business PayPal account will allow you to accept payments with PayPal. Each purchase made with PayPal will be deposited into your PayPal account immediately.',
      secondText:
        'Payments via PayPal are supported in every country except Brazil, India, Israel, Japan, Micronesia, Turkey.',
    },
  ];
  return (
    <main className="h-full w-full relative">
      <div className="mx-auto">
        {gateways.map((gateway) => (
          <React.Fragment key={gateway.name}>
            <PaymentItem name={gateway.name} url={gateway.url} image={gateway.image} firstText={gateway.firstText} lastText={gateway.secondText}/>
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
