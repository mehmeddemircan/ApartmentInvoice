import React from 'react'
import MainLayout from '../layouts/MainLayout'
import SponsorSection from '../components/sponsor/SponsorSection'

const AboutUsPage = () => {
  return (
    <MainLayout>
        <section class="">
    <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="lg:text-center">
                <h2
                    class="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                    Why choose us?
                </h2>
                <p class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    We know tech, we know finance. We are fintech experts.
                </p>
                <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    We know how to handle taxation for all the
                    countried we operate in. We care for our customers and help them manage cashflows.
                </p>
            </div>

            <div class="mt-10">
                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful API</p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Easy to integrate
                                SDK
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Low Transaction Cost
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />

                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful Dashboard
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
    </div>
</section>
<div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Company</span>
            </h2>
            <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                voluptatum.
            </p>
        </div>
    </div>
</div>
<SponsorSection />
    </MainLayout>
  )
}

export default AboutUsPage