import React from "react";

export default function Affiliated() {
  return (
    <div className="w-4/5 mx-auto bg-grey_95 rounded-2xl border border-dashed border-dark_ text-center py-12">
      <div className="w-3/4 mx-auto">
        <img
          src="/images/affiliated.svg"
          alt="..."
          className="w-48 h-52 mx-auto"
        />

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-dark_ mb-2">
            No Affiliate Yet
          </h3>
          <p>You are not affiliated to anyone yet!</p>
        </div>
      </div>
    </div>
  );
}
