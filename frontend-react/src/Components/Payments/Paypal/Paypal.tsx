import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Paypal({total}) {
  return (
    <div>
       <PayPalScriptProvider
        options={{ "client-id": 'AVzcJhvoTR72Vuk2PJsGWHsrYO8F6GRctglijHeDtmpKxzpAHRzPAW4cRz9fIAx0eY-B2ZEwv5cDqcMw', 'disable-funding': 'card', }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value:total,
                  },
                },
              ],
            });
          }}
        //   onApprove={async (data, actions) => {
        //     const details = await actions.order.capture();
        //     const name = details.payer.name.given_name;
        //     alert("Transaction completed by " + name);
        //   }}
        />
      </PayPalScriptProvider>
    </div>
  )
}

export default Paypal