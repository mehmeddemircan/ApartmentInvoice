import React, { Fragment } from 'react'

const PaymentSection = ({isDonate,title, content, buttonTitle}) => {
  return (
    <Fragment>
         <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p class="text-xl font-medium">{title}</p>
            <p class="text-gray-400">
             {content}
            </p>
            <div class="">
              <label
                for="card-holder"
                class="mt-4 mb-2 block text-sm font-medium"
              >
                Card Holder
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  ></svg>
                </div>
              </div>
              <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">
                Card Details
              </label>
              <div class="flex">
                <div class="relative w-7/12 flex-shrink-0">
                  <input
                    type="text"
                    id="card-no"
                    name="card-no"
                    class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                  />
                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      class="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    ></svg>
                  </div>
                </div>
                <input
                  type="text"
                  name="credit-expiry"
                  class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="MM/YY"
                />
                <input
                  type="text"
                  name="credit-cvc"
                  class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="CVC"
                />
              </div>

             {!isDonate && (
              <Fragment>
                   <div class="mt-6 border-t border-b py-2">
                 <div class="flex items-center justify-between">
                   <p class="text-sm font-medium text-gray-900">Subtotal</p>
                   <p class="font-semibold text-gray-900">$399.00</p>
                 </div>
                 <div class="flex items-center justify-between">
                   <p class="text-sm font-medium text-gray-900">Shipping</p>
                   <p class="font-semibold text-gray-900">$8.00</p>
                 </div>
               </div>
               <div class="mt-6 flex items-center justify-between">
                 <p class="text-sm font-medium text-gray-900">Total</p>
                 <p class="text-2xl font-semibold text-gray-900">$408.00</p>
               </div>
            
              </Fragment>
             )}
              </div>
            <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
           {buttonTitle}
            </button>
          </div>
    </Fragment>
  )
}

export default PaymentSection