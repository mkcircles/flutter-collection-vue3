import PaymentData from "./types/PaymentData";
export default function (paymentData: PaymentData) {
    

    if (!paymentData.public_key)
        throw new Error('Please specify your public key')



    let payData = {
        ...paymentData,
        public_key: paymentData.public_key ?? '',
        callback: (response: any) => {
            paymentData.callback(response)
        }
    }

    // @ts-ignore
    window.FlutterwaveCheckout(payData)


}
