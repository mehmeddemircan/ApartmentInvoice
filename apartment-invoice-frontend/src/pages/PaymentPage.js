import React, { Fragment, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import PaymentSection from "../components/sections/payment/PaymentSection";
import {useDispatch, useSelector} from 'react-redux'
import { GetSingleSubscription } from "../redux/actions/SubscriptionAction";
import { useParams } from "react-router-dom";

import SuccessResult from "../components/results/SuccessResult";
import PaymentResult from "../components/results/PaymentResult";
const PaymentPage = () => {
  
  let { subscriptionId } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(GetSingleSubscription(subscriptionId))
  }, [dispatch,subscriptionId])

  const paySubscription = useSelector((state) => state.payment.paySubscription)

  return (
    <MainLayout>
      <div className="container mx-auto">
        <div class="grid sm:px-10 lg:grid-cols-1 lg:px-20 xl:px-32">
        {paySubscription.isPayed ? <PaymentResult /> : (
          <>
           <PaymentSection title="Aidat Ödemesi" content="Aidat kısmında ki ödemeyi bu sayfadan yapabilirsiniz" buttonTitle="Ödeme yap" isDonate={false} />
          <div class="px-4 pt-8">
            <p class="mt-8 text-lg font-medium">Shipping Methods</p>
            <form class="mt-5 grid gap-6">
              <div class="relative">
                <input
                  class="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked
                />
                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  for="radio_1"
                >
                  <img
                    class="w-14 object-contain"
                    src="https://play-lh.googleusercontent.com/jMECkIn97zzMi1IoWlb9SYjtbYolSPmgdLmylwIwo3pbhQ_omkRMzM0bS-PnN461hg"
                    alt=""
                  />
                  <div class="ml-5">
                    <span class="mt-2 font-semibold">Fedex Delivery</span>
                    <p class="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div>
              <div class="relative">
                <input
                  class="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  checked
                />
                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  for="radio_2"
                >
                  <img
                    class="w-14 object-contain"
                    src="https://www.ayicgiyim.com/image/cache/catalog/demo/blog/visa-credit-cart-visa-kredi-kart%C4%B1-600x315w.png.webp"
                    alt=""
                  />
                  <div class="ml-5">
                    <span class="mt-2 font-semibold">Fedex Delivery</span>
                    <p class="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div>
            </form>
          </div></>
        )}
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentPage;
