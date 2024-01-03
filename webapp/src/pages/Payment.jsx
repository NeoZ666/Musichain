import React from "react";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const plansList = [
    {
      name: "1 Month Subscription",
      price: 100,
    },
    {
      name: "6 Months Subscription",
      price: 600,
    },
    {
      name: "1 Year Subscription",
      price: 1200,
    },
  ];
  console.log(plansList);

  const makePayment1 = async () => {
    const plans = [
      {
        name: "1 Month Subscription",
        price: 100,
      },
    ];
    const stripe = await loadStripe(
      "pk_test_51Nk7IzSEBFON0EJBUBJSTdEuns8D1cKcVCeq1927785ziBknaTz0NzNKaEYsHaCdtVwxtHlLViFTezfDzZ7HcLam00YiYPxonf"
    );

    const body = {
      plans: plans,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:7000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  const makePayment2 = async () => {
    const plans = [
      {
        name: "6 Months Subscription",
        price: 600,
      },
    ];
    console.log(plans);
    const stripe = await loadStripe(
      "pk_test_51Nk7IzSEBFON0EJBUBJSTdEuns8D1cKcVCeq1927785ziBknaTz0NzNKaEYsHaCdtVwxtHlLViFTezfDzZ7HcLam00YiYPxonf"
    );

    const body = {
      plans: plans,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:7000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  const makePayment3 = async () => {
    const plans = [
      {
        name: "1 Year Subscription",
        price: 1200,
      },
    ];
    const stripe = await loadStripe(
      "pk_test_51Nk7IzSEBFON0EJBUBJSTdEuns8D1cKcVCeq1927785ziBknaTz0NzNKaEYsHaCdtVwxtHlLViFTezfDzZ7HcLam00YiYPxonf"
    );

    const body = {
      plans: plans,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:7000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <section className="text-gray-600 body-font h-screen flex items-center justify-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* ... (Repeat for the other subscription plans) ... */}
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <div className="w-20 h-20 mb-8 bg-gray-200 rounded-full inline-flex items-center justify-center">
                {/* Replace the image with custom content */}
                <span className="text-4xl">A</span>
              </div>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                1 Month Subscription
              </h2>
              <p className="leading-relaxed">
                Get the monthly premium subscription of MusiChain.
              </p>
              <button
                type="button"
                onClick={makePayment1}
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
              >
                Pay with Stripe
              </button>
            </div>
          </div>

          {/* This is for 6month subscription */}
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <div className="w-20 h-20 mb-8 bg-gray-200 rounded-full inline-flex items-center justify-center">
                {/* Replace the image with custom content */}
                <span className="text-4xl">A</span>
              </div>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                6 Months Subscription
              </h2>
              <p className="leading-relaxed">
                Get the half-yearly premium subscription of MusiChain.
              </p>
              <button
                type="button"
                onClick={makePayment2}
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
              >
                Pay with Stripe
              </button>
            </div>
          </div>

          {/* This is for yearly subscription */}
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <div className="w-20 h-20 mb-8 bg-gray-200 rounded-full inline-flex items-center justify-center">
                {/* Replace the image with custom content */}
                <span className="text-4xl">A</span>
              </div>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Annual Subscription
              </h2>
              <p className="leading-relaxed">
                Get the yearly premium subscription of MusiChain.
              </p>
              <button
                type="button"
                onClick={makePayment3}
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
              >
                Pay with Stripe
              </button>
            </div>
          </div>

          {/* ... (Repeat for the other subscription plans) ... */}
        </div>
      </div>
    </section>

    // <section className="text-gray-600 body-font h-screen flex items-center justify-center">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="flex flex-wrap -m-4">
    //       <div className="lg:w-1/3 lg:mb-0 p-4">
    //         <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
    //           <div className="w-20 h-20 mb-8 bg-gray-200 rounded-full flex items-center justify-center">
    //             {/* Replace the image with custom content */}
    //             <span className="text-4xl">A</span>
    //           </div>
    //           <div className="text-center">
    //             <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
    //               1 Month Subscription
    //             </h2>
    //             <p className="leading-relaxed">
    //               Get the 1 Month Subscription of MusiChain.
    //             </p>
    //             <button
    //               type="button"
    //               onClick={() => makePayment(100)}
    //               className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 mt-4"
    //             >
    //               Pay with Stripe
    //             </button>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="lg:w-1/3 lg:mb-0 p-4">
    //         <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
    //           <div className="w-20 h-20 mb-8 bg-gray-200 rounded-full flex items-center justify-center">
    //             {/* Replace the image with custom content */}
    //             <span className="text-4xl">A</span>
    //           </div>
    //           <div className="text-center">
    //             <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
    //               6 Months Subscription
    //             </h2>
    //             <p className="leading-relaxed">
    //               Get the 6 Months Subscription of MusiChain.
    //             </p>
    //             <button
    //               type="button"
    //               onClick={() => makePayment(600)}
    //               className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 mt-4"
    //             >
    //               Pay with Stripe
    //             </button>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="lg:w-1/3 lg:mb-0 p-4">
    //         <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
    //           <div className="w-20 h-20 mb-8 bg-gray-200 rounded-full flex items-center justify-center">
    //             {/* Replace the image with custom content */}
    //             <span className="text-4xl">A</span>
    //           </div>
    //           <div className="text-center">
    //             <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
    //               Annual Subscription
    //             </h2>
    //             <p className="leading-relaxed">
    //               Get the Annual Subscription of MusiChain.
    //             </p>
    //             <button
    //               type="button"
    //               onClick={() => makePayment3(1200)}
    //               className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 mt-4"
    //             >
    //               Pay with Stripe
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Payment;
/*
Payment.jsx page will contain all the 3 plans and will redirect to the payment gateway.

There will be a button on the main website to buy a subscription plan, which will redirect to the payment.jsx page.
However this page will be accessible only after the user has logged in and not a PRO member.
*/
