import React, { useState } from "react";

const SubscriptionCard = ({ item }) => {
  return (
    <div className="w-25 relative">
      <div class="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
        <div class="flex-1">
          <h3 class="text-xl font-semibold ">Pro</h3>
          <p class="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
            Most popular
          </p>
          <p class="mt-4 flex items-baseline ">
            <span class="text-5xl font-extrabold tracking-tight">
              {item.amount} TL
            </span>
            <span class="ml-1 text-xl font-semibold">/month</span>
          </p>
          <p class="mt-2 text-1xl font-bold tracking-tight">
            Tarih : {item.subscriptionDate}
          </p>
          <p class="mt-6 ">You want to learn and have a personal assistant</p>
          <ul role="list" class="mt-6 space-y-6">
            <li class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="flex-shrink-0 w-6 h-6 text-emerald-500"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="ml-3 ">30 credits</span>
            </li>
            <li class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="flex-shrink-0 w-6 h-6 text-emerald-500"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="ml-3 ">Powered by GPT-4 (more accurate)</span>
            </li>
            <li class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="flex-shrink-0 w-6 h-6 text-emerald-500"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="ml-3 ">Generate video (2 credits)</span>
            </li>
            <li class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="flex-shrink-0 w-6 h-6 text-emerald-500"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="ml-3 ">Quizz (1 credits) </span>
            </li>
            <li class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="flex-shrink-0 w-6 h-6 text-emerald-500"
                aria-hidden="true"
              >
                <polyline points="20l1 6 9 17 4 12"></polyline>
              </svg>
              <span class="ml-3 ">Analytics on the quizz</span>
            </li>
          </ul>
        </div>
        <a
          class="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
          href={`${item.id}/payment`}
        >
          Ödeme yap
        </a>
      </div>
    </div>
  );
};

export default SubscriptionCard;
