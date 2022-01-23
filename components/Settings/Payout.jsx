import React from "react";

const PayoutItem = ({ name }) => (
  <div className="px-6 py-9 rounded-2xl border border-grey_80 flex justify-between">
    <span className="text-2xl font-semibold text-secondary">{name}</span>
    <div className="w-[70%]">
      <p className="text-sm text-grey_40">
        Connecting a personal or business PayPal account will allow you to
        accept payments with PayPal. Each purchase made with PayPal will be
        deposited into your PayPal account immediately. Payments via PayPal are
        supported in every country except Brazil, India, Israel, Japan,
        Micronesia, Turkey.
      </p>
      <div className="mt-6">
        <button className="rounded-lg px-8 py-4 bg-cabiza_blue text-white font-semibold text-lg">
          Connect with {name}
        </button>
      </div>
    </div>
  </div>
);

export default function Payout() {
  const gateways = [
    { name: "Paypal" },
    { name: "Stripe" },
    { name: "Flutterwave" },
  ];
  return (
    <main className="h-full w-full relative">
      <div className="w-4/5 mx-auto md:py-10">
        {gateways.map((gateway) => (
          <React.Fragment key={gateway.name}>
            <PayoutItem name={gateway.name} />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
