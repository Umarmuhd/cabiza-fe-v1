import ReferralTable from "@/components/ReferralTable";
import React from "react";
import { useReferrals } from "@/hooks/useReferrals";

const ReferralStats = () => {
  const { data, isLoading } = useReferrals();

  const referrals = isLoading ? [] : data;

  return (
    <div className="bg-white rounded-2xl p-12 px-3 md:w-43/50 mx-auto mt-10 shadow mb-12 md:px-10">
      <div className="text-center relative mb-8">
        <h1 className="text-3xl font-semibold mb-4">
          Your Referral Statistics
        </h1>
        <p className="w-3/4 mx-auto text-center">
          Invite your friends to join Cabiza and earn with them.
        </p>
      </div>
      <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="px-12 py-12 text-center sm:px-4 sm:py-4 bg-secondary_sky_lightest rounded-3xl">
          <h6 className="mb-2 text-2xl font-bold leading-8 tracking-wider uppercase text-secondary_ink_darkest">
            $0
          </h6>
          <div className="mb-2 text-secondary_ink_lighter text-lg font-medium">
            Total Earned
          </div>
        </div>
        <div className="px-12 py-12 text-center sm:px-4 sm:py-4 bg-secondary_sky_lightest rounded-3xl">
          <h6 className="mb-2 text-2xl font-bold leading-8 tracking-wider uppercase text-secondary_ink_darkest">
            {referrals.length}
          </h6>
          <div className="mb-2 text-secondary_ink_lighter text-lg font-medium">
            Total Referral
          </div>
        </div>
        <div className="px-12 py-12 text-center sm:px-4 sm:py-4 bg-secondary_sky_lightest rounded-3xl">
          <h6 className="mb-2 text-2xl font-bold leading-8 tracking-wider uppercase text-secondary_ink_darkest">
            0
          </h6>
          <div className="mb-2 text-secondary_ink_lighter text-lg font-medium">
            Completed
          </div>
        </div>
        <div className="px-12 py-12 text-center sm:px-4 sm:py-4 bg-secondary_sky_lightest rounded-3xl">
          <h6 className="mb-2 text-2xl font-bold leading-8 tracking-wider uppercase text-secondary_ink_darkest">
            1
          </h6>
          <div className="mb-2 text-secondary_ink_lighter text-lg font-medium">
            Pending
          </div>
        </div>
      </div>
      <ReferralTable list={referrals} />
    </div>
  );
};

export default ReferralStats;
