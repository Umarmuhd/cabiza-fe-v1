import React from 'react';
import { FieldSet, InputField } from 'fannypack';
import { css } from 'styled-components';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import PFooter from '@/components/Footer/PFooter';
import styles from './styles/index.module.css'

const Index = () => {
//      const {
//     wrapperProps,
//     getCardImageProps,
//     getCardNumberProps,
//     getExpiryDateProps,
//     getCVCProps
//   } = usePaymentInputs();

  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();
  const { erroredInputs, touchedInputs } = meta;

  
    return (
        <div style={{
            background: "#D9D9D9"
        }}>
            <div style={{
                height: "20vh",
                background: "#24BAD4"
            }}></div>
           <div action="" className={styles.form}>
               <div className={styles["cancel-btn-container"]}>
                   <div className={styles["cancel-btn"]}>x</div>
               </div>
               <form action="">
                    <h2>CHECKOUT</h2>
                    <h4>Freedom Pack ( ALL COURSES)</h4>
                    <p>Enter your info to complete your purchase</p>

                    <div className={`${styles["input-box"]} mt-8`}>
                        <div className={styles["input-container"]}>
                            <input type="text" name="fullName" id="fullName" placeholder="Your full name"/>
                            
                        </div>

                        <div className={styles["input-container"]}>
                            <input type="email" name="email" id="email" placeholder="Your email address"/>
                            <img src="/images/icons/envelope.svg" alt="..." style={{display: "inline", marginLeft: "10px"}}/>
                        </div>

                        <div className={styles["input-container"]}>
                            <input type="text" name="discountCount" id="discountCount" placeholder="Discount code (optional)"/>
                            <img src="/images/icons/gift.svg" alt="..." style={{display: "inline", marginLeft: "10px"}}/>
                        </div>
                    </div>

                    <div className={`${styles["input-box"]} mt-8`}>
                        <div className={styles["card-container"]}>
                            <h5>Cards  <img src="/images/icons/cards.svg" alt="..." style={{display: "inline", marginLeft: "10px"}}/></h5>
                            <p>or pay with</p>
                            <div className={styles["payment-image"]}>
                                <img src="/images/icons/flutterwave.svg" alt="..." style={{display: "inline", marginLeft: "10px"}}/>
                            </div>
                        </div>

                        <div className={`${styles["input-cnum"]}`}>
                            <FieldSet isHorizontal>
                                <InputField
                                    // Here is where React Payment Inputs injects itself into the input element.
                                    {...getCardNumberProps()}
                                    placeholder="0000 0000 0000 0000"
                                    label="Card number"
                                    inputRef={getCardNumberProps().ref}
                                    // You can retrieve error state by making use of the error & touched attributes in `meta`.
                                    state={erroredInputs.cardNumber && touchedInputs.cardNumber ? 'danger' : undefined}
                                    validationText={touchedInputs.cardNumber && erroredInputs.cardNumber}
                                    
                                    styles={{
        fieldWrapper: {
          base: css`
            margin-bottom: 1rem;
          `
        },
        inputWrapper: {
          base: css`
            border-color: green;
            border-radius: 50px;
          `,
          errored: css`
            border-color: maroon;
          `,
          focused: css`
            border-color: unset;
            box-shadow: 0;
            outline: none;
            border: 1px solid #bdbdbd;
          `
        },
        input: {
          base: css`
            color: green;
          `,
          focused: css`
            border-color: unset;
            box-shadow: 0;
            outline: none;
            border: 1px solid #bdbdbd;
          `,
          errored: css`
            color: maroon;
          `,
          cardNumber: css`
            width: 15rem;
          `,
          expiryDate: css`
            width: 10rem;
          `,
          cvc: css`
            width: 5rem;
          `
        },
        errorText: {
          base: css`
            color: maroon;
          `
        }
      }}
                                />
                                </FieldSet>
                        </div>

                        <div className={`${styles.flex} mb-5 mt-4`}>
                            <InputField
                                {...getExpiryDateProps()}
                                label="Expiry date"
                                inputRef={getExpiryDateProps().ref}
                                state={erroredInputs.expiryDate && touchedInputs.expiryDate ? 'danger' : undefined}
                                validationText={touchedInputs.expiryDate && erroredInputs.expiryDate}
                                maxWidth="8rem"
                            />
                            
                            <InputField
                                {...getCVCProps()}
                                placeholder="123"
                                label="CVC"
                                inputRef={getCVCProps().ref}
                                state={erroredInputs.cvc && touchedInputs.cvc ? 'danger' : undefined}
                                validationText={touchedInputs.cvc && erroredInputs.cvc}
                                maxWidth="5rem"
                            />
                        </div>
                    </div>

                    <div className={`${styles["input-box"]} mt-3`} style={{
                        color: "#CCCCCC",
                        padding: ".4rem"
                    }}>
                           You'll be charged US$900.
                    </div>

                    <button className={`${styles.btn} mt-5`}>
                        Pay
                    </button>
               </form>
               
           </div>
           <PFooter/>
        </div>
    );
}

export default Index;
