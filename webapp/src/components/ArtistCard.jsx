import React, { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/outline";

const ArtistCard = ({ artist }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const makePayment = async () => {
    const plans = [
      {
        name: "Exclusive Access to Event",
        price: 50,
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

  const posts = [
    {
      name: "Artist 1",
      events: ["Event 1", "Event 2", "Event 3"],
    },
  ];

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    // this is somewhat okayish table
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Artist
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Performer
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Drake
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Event
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Watch me perform live on Sollertia on 15th January 2024 at 8:00
              PM. I will be performing my latest songs and will be interacting
              with my fans.
            </dd>
            <button
              onClick={makePayment()} // Corrected onClick handler
              className="block md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:hidden"
            >
              Join this Event
            </button>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ArtistCard;
