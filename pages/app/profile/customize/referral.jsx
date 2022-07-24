import Alert from "@/components/Alert";
import ShareReferralLink from "@/components/ShareReferralLink";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import React, { useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { sendEmailInvite } from "api_calls";

const SendIcon = ({ className }) => (
  <svg
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className ? className : ""}`}
  >
    <path
      d="M18.96 29.5125C17.3867 29.5125 15.16 28.4058 13.4 23.1125L12.44 20.2325L9.56001 19.2725C4.28001 17.5125 3.17334 15.2858 3.17334 13.7125C3.17334 12.1525 4.28001 9.91246 9.56001 8.13912L20.88 4.36579C23.7067 3.41912 26.0667 3.69912 27.52 5.13912C28.9733 6.57912 29.2533 8.95246 28.3067 11.7791L24.5333 23.0991C22.76 28.4058 20.5333 29.5125 18.96 29.5125ZM10.1867 10.0458C6.48001 11.2858 5.16001 12.7525 5.16001 13.7125C5.16001 14.6725 6.48001 16.1391 10.1867 17.3658L13.5467 18.4858C13.84 18.5791 14.08 18.8191 14.1733 19.1125L15.2933 22.4725C16.52 26.1791 18 27.4991 18.96 27.4991C19.92 27.4991 21.3867 26.1791 22.6267 22.4725L26.4 11.1525C27.08 9.09912 26.96 7.41912 26.0933 6.55246C25.2267 5.68579 23.5467 5.57912 21.5067 6.25912L10.1867 10.0458Z"
      fill="white"
    />
    <path
      d="M13.4801 19.8724C13.2267 19.8724 12.9734 19.7791 12.7734 19.5791C12.3867 19.1924 12.3867 18.5524 12.7734 18.1658L17.5467 13.3791C17.9334 12.9924 18.5734 12.9924 18.9601 13.3791C19.3467 13.7658 19.3467 14.4058 18.9601 14.7924L14.1867 19.5791C14.0001 19.7791 13.7334 19.8724 13.4801 19.8724Z"
      fill="white"
    />
  </svg>
);

const Referral = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(sendEmailInvite, {
    onSuccess: (res) => {
      toast.custom(<Alert color="#24C78C">{res.message}</Alert>);
      reset({ email: "" });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate, isLoading } = mutation;

  const onSubmit = (data) => mutate(data);

  return (
    <div className="bg-white rounded-2xl p-12 px-3 md:w-43/50 mx-auto mt-10 shadow mb-12 md:px-10">
      <div className="text-center relative mb-8">
        <h1 className="text-3xl font-semibold mb-4">Referrals</h1>
        <p className="w-3/4 mx-auto text-center">
          Invite your friends to join Cabiza and earn with them.
        </p>
      </div>
      <div className="grid gap-8 row-gap-0 lg:grid-cols-3 mb-8">
        <div className="relative text-center bg-secondary_sky_lightest p-4 rounded-3xl">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-20 sm:h-20">
            <Image
              src="/images/1-invite.svg"
              alt="..."
              width={60}
              height={60}
            />
          </div>
          <h6 className="mb-2 text-2xl font-extrabold text-secondary_ink_darkest">
            Invitation
          </h6>
          <p className="max-w-md mb-3 text-sm text-secondary_ink_lighter sm:mx-auto">
            Send your invite link your friends to join Cabiza.
          </p>

          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg
              className="w-8 text-primary transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
        </div>
        <div className="relative text-center bg-secondary_sky_lightest p-4 rounded-3xl">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-20 sm:h-20">
            <Image
              src="/images/2-tag-user.svg"
              alt="..."
              width={60}
              height={60}
            />
          </div>
          <h6 className="mb-2 text-2xl font-extrabold text-secondary_ink_darkest">
            Registration
          </h6>
          <p className="max-w-md mb-3 text-sm text-secondary_ink_lighter sm:mx-auto">
            Get them to register on Cabiza using your link.
          </p>

          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg
              className="w-8 text-primary transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
        </div>
        <div className="relative text-center bg-secondary_sky_lightest p-4 rounded-3xl">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-20 sm:h-20">
            <Image
              src="/images/3-dollar-square.svg"
              alt="..."
              width={60}
              height={60}
            />
          </div>
          <h6 className="mb-2 text-2xl font-extrabold text-secondary_ink_darkest">
            Start Earning
          </h6>
          <p className="max-w-md mb-3 text-sm text-secondary_ink_lighter sm:mx-auto">
            Start earning while you learn, it’s as easy.
          </p>
        </div>
      </div>

      <form className="mb-8" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-2xl font-semibold text-secondary_ink_darkest mb-2">
          Invite your friend
        </h3>
        <p className="text-base text-secondary_ink_lighter">
          Insert your friend’s email address and send to join Cabiza.
        </p>
        <div
          className={`flex justify-center items-center rounded-full overflow-hidden py-1 border border-secondary_sky_base mt-6`}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address..."
            className="ml-3 h-[100%] border-[transparent] bg-[transparent] w-11/12 border-none outline-0 p-0 px-8"
            autoComplete="off"
            {...register("email", { required: true })}
          />
          <button
            className="mr-3 bg-primary rounded-full p-3"
            disabled={isLoading}
          >
            <SendIcon className="w-[1.5rem] h-[1.5rem]" />
          </button>
        </div>
        {errors.email?.type === "required" && (
          <p className="text-left text-red-600 text-xs mt-1 px-4">
            Email address is required
          </p>
        )}
      </form>

      <div className="">
        <h3 className="text-2xl font-semibold text-secondary_ink_darkest mb-2">
          Share the referral link
        </h3>
        <p className="text-base text-secondary_ink_lighter">
          You can also share the referral link by coping and sending it or
          sending via your social media.
        </p>

        <div className="flex justify-between items-center space-x-6 mt-6 place-items-center md:flex-row flex-col">
          <div className="flex items-center justify-between h-12 mx-auto sm:h-12 bg-secondary_sky_lighter px-6 py-4 rounded-full w-full">
            <span className="leading-4 text-secondary">
              {`app.cabiza.net/auth/signup?ref=${user?.referral?.referral_id}`}
            </span>
            <CopyToClipboard
              text={`https://app.cabiza.net/auth/signup?ref=${user?.referral?.referral_id}`}
              onCopy={() =>
                toast.custom(<Alert color="#24C78C" text="Copied success !" />)
              }
            >
              <button className="text-primary font-medium leading-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </button>
            </CopyToClipboard>
          </div>
          <div className="flex items-center justify-end md:mt-0 mt-4">
            <ShareReferralLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
