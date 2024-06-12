import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import MapComponent from "../components/map/MapComponent";
import { useDispatch, useSelector } from "react-redux";
import { AllApartment } from "../redux/actions/ApartmentActions";

const HomePage = () => {
  const getAllApartment = useSelector(
    (state) => state.apartment.getAllApartment
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllApartment());
  }, [dispatch]);

  return (
    <MainLayout>
      <div class="relative mt-3 mb-12 flex w-full flex-col items-center sm:mt-24">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://example.com"
          class="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 248 204"
            class="h-5 w-5 text-[#1d9bf0]"
          >
            <path
              fill="currentColor"
              d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.20 26.16z"
            ></path>
          </svg>
          <p class="text-sm font-semibold text-[#1d9bf0]">
           Yeni Gelen özellik
          </p>
        </a>
        <h1 class="mt-8 max-w-sm bg-gradient-to-br from-gray-500 via-teal-500 to-gray-500 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:max-w-4xl sm:text-6xl">
          Apartmanını bu site ile güçlendir
        </h1>
        <span class="mt-8 max-w-lg text-center text-xl leading-relaxed text-gray-800">
          Yeni özellikleri apartmanım sitesiyle takip et yeni özellikleri kesfet ve kaçırma
        </span>
        <p class="mt-3 rounded border px-3 py-1 shadow">
          🎁 <span class="text-accent font-semibold">TL50 indirim </span> ilk 1000 müsteri için!
        </p>
        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4">
          <a
            href="https://example.com/new-feature"
            class="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 bg-teal-500"
          >
            <svg
              class="h-[30px] text-white"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              stroke-width="3"
              fill="none"
            >
              <path d="M14,39.87,24.59,50.51s33-14,31.23-42.29C55.82,8.22,29.64,4.28,14,39.87Z"></path>
              <path d="M44.69,9.09a12.3,12.3,0,0,0,3.48,6.73,12.31,12.31,0,0,0,7,3.52"></path>
              <circle cx="39.46" cy="24.56" r="6.2"></circle>
              <path d="M14.89,37.82l-5.3.68a.27.27,0,0,1-.28-.37l3.93-9a2.65,2.65,0,0,1,1.88-1.53l6.59-1.38"></path>
              <path d="M26.55,49.4l-.69,5.3a.27.27,0,0,0,.37.28l9-3.92a2.69,2.69,0,0,0,1.53-1.89l1.38-6.59"></path>
              <path d="M22.21,48.13c-2.37,7.41-14.1,7.78-14.1,7.78S8,44.51,15.76,41.67"></path>
            </svg>
           En son güncellemeyi al
          </a>
          <a
            href="#demo"
            class="flex flex-row items-center justify-center gap-x-2 rounded-lg border border-teal-500 px-10 py-3 text-teal-500"
          >
            Daha fazlası için
          </a>
        </div>
      </div>

      <div class="row mt-6x equal-cards">
        <div class="col-xs-12 col-sm-6 my-3">
          <div
            class="aps_card fixed-left"
            style={{
              border: "1px solid #222",
              borderRadius: "32px",
              background: "#fff",
              padding: "32px",
              border: "1px solid #dce3eb",
              textAlign: "left",
              position: "relative",
              marginBottom: "30px",
              transition: "all .3s ease-in-out 0s",
            }}
          >
            <div class="card-icon my-3">
              <img
                src="https://cdn.apsiyon.com/V5/64965/dist/img/ui/web-1.svg"
                alt="Apsiyon Websitesi"
                width="46px"
                height="46px"
              />
            </div>
            <h3 class="card-title">SEO Uyumlu Web Sitesi</h3>
            <p class="text-tiny card-text">
              Hem konut sakinlerine hem de potansiyel müşterilere çok daha şık
              ve modern ve SEO uyumlu bir web sitesi sunabilirsiniz.
            </p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 my-3">
          <div
            class="aps_card fixed-left"
            style={{
              border: "1px solid #222",
              borderRadius: "32px",
              background: "#fff",
              padding: "32px",
              border: "1px solid #dce3eb",
              textAlign: "left",
              position: "relative",
              marginBottom: "30px",
              transition: "all .3s ease-in-out 0s",
            }}
          >
            <div class="card-icon my-3">
              <img
                src="https://cdn.apsiyon.com/V5/64965/dist/img/ui/web-2.svg"
                alt="Apsiyon Websitesi"
                width="46px"
                height="46px"
              />
            </div>
            <h3 class="card-title">Özelleştirilebilir Sayfalar</h3>
            <p class="text-tiny card-text">
              Web sitenizde sayfaları dilediğiniz gibi oluşturup
              düzenleyebilirsiniz.
            </p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 my-3">
          <div
            class="aps_card fixed-left"
            style={{
              border: "1px solid #222",
              borderRadius: "32px",
              background: "#fff",
              padding: "32px",
              border: "1px solid #dce3eb",
              textAlign: "left",
              position: "relative",
              marginBottom: "30px",
              transition: "all .3s ease-in-out 0s",
            }}
          >
            <div class="card-icon my-3">
              <img
                src="https://cdn.apsiyon.com/V5/64965/dist/img/ui/web-3.svg"
                alt="Apsiyon Websitesi"
                width="46px"
                height="46px"
              />
            </div>
            <h3 class="card-title">Rapor Paylaşımı</h3>
            <p class="text-tiny card-text">
              Konut sakinleri ile paylaşmak istediğiniz raporları web sitenizde
              yayınlayabilirsiniz.
            </p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 my-3">
          <div
            class="aps_card fixed-left"
            style={{
              border: "1px solid #222",
              borderRadius: "32px",
              background: "#fff",
              padding: "32px",
              border: "1px solid #dce3eb",
              textAlign: "left",
              position: "relative",
              marginBottom: "30px",
              transition: "all .3s ease-in-out 0s",
            }}
          >
            <div class="card-icon my-3">
              <img
                src="https://cdn.apsiyon.com/V5/64965/dist/img/ui/web-4.svg"
                alt="Apsiyon Websitesi"
                width="46px"
                height="46px"
              />
            </div>
            <h3 class="card-title">Talep Oluşturma İmkanı</h3>
            <p class="text-tiny card-text">
              Konut sakinlerine, öneri veya arıza gibi iş talepleri
              oluşturmaları için platform sağlayabilirsiniz.
            </p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 my-3">
          <div
            class="aps_card fixed-left"
            style={{
              border: "1px solid #222",
              borderRadius: "32px",
              background: "#fff",
              padding: "32px",
              border: "1px solid #dce3eb",
              textAlign: "left",
              position: "relative",
              marginBottom: "30px",
              transition: "all .3s ease-in-out 0s",
            }}
          >
            <div class="card-icon my-3">
              <img
                src="https://cdn.apsiyon.com/V5/64965/dist/img/ui/web-5.svg"
                alt="Apsiyon Websitesi"
                width="46px"
                height="46px"
              />
            </div>
            <h3 class="card-title">Rezervasyon İşlemleri</h3>
            <p class="text-tiny card-text">
              Web sitesi üzerinden ortak tesislere rezervasyon alabilir ve
              kolaylıkla takip edebilirsiniz.
            </p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 my-3">
          <div
            class="aps_card fixed-left "
            style={{
              border: "1px solid #222",
              borderRadius: "32px",
              background: "#fff",
              padding: "32px",
              border: "1px solid #dce3eb",
              textAlign: "left",
              position: "relative",
              marginBottom: "30px",
              transition: "all .3s ease-in-out 0s",
            }}
          >
            <div class="card-icon my-3">
              <img
                src="https://cdn.apsiyon.com/V5/64965/dist/img/ui/web-6.svg"
                alt="Apsiyon Websitesi"
                width="46px"
                height="46px"
              />
            </div>
            <h3 class="card-title">Rehber Özelliği</h3>
            <p class="text-tiny card-text">
              Yönetim kadrosunun iletişim bilgilerini ve faydalı telefon
              numaralarını web sitenizde yayınlayabilirsiniz.
            </p>
          </div>
        </div>
      </div>

      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          class="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image"
        />
        <img
          class="w-full hidden dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard image"
        />
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
           Bizi bir araya getirecek daha fazla araç ve fikir yaratalım.
          </h2>
          <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          bu özellik arkadaşlarınızla ve insan topluluklarıyla bağlantı kurmanıza yardımcı olur
            ilgi alanlarınızı paylaşan kişiler. Arkadaşlarınızla ve ailenizle bağlantı kurmak
            Gruplar gibi özellikler sayesinde yenilerini keşfetmek de kolaydır.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Başlayın
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-6">
        <div class="mx-auto">
          <div
            class="relative z-20 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to left bottom, #f87171, #f55979, #ee4085, #e12896, #cb18a9, #bd12b5, #aa16c1, #921fce, #881ed5, #7d1fdc, #6e21e3, #5c24eb)",
            }}
          >
            <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
              <div class="lg:self-center">
                <h2 class="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                  <span class="block">
                  Kullanıcı hesapları nasıl yönetilir
                  </span>
                </h2>
                <p class="mt-4 text-base leading-6 text-white">
                Her sakin için ayrı kullanıcı hesapları oluşturulur. Yönetici, kullanıcıların yetkilerini ve erişim düzeylerini belirleyebilir. Sistem, gelir-gider tablosu, borç-alacak durumu gibi detaylı finansal raporlar oluşturabilir. Bu raporlar, PDF veya Excel formatında indirilebilir ve toplantılarda kullanılabilir.
                </p>
                <p class="mt-4 text-base leading-6 text-dark-blue-800"></p>
                <a
                  href="#"
                  target="_blank"
                  style={{ backgroundColor: "#000" }}
                  class="mt-8 border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium  text-white transition duration-150 ease-in-out"
                >
                 Başlayın
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="ml-4 mt-8 text-white font-bold text-sm underline"
                >
                Daha fazlası 
                </a>
              </div>
            </div>
            <div class="relative pb-3/5 -mt-6 md:pb-1/2">
              <img
                class="absolute inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-10 lg:translate-y-20"
                src="https://st3.depositphotos.com/1017986/16434/i/950/depositphotos_164346090-stock-photo-happy-family-with-child-moving.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-4 ">
        <div class="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm">
          <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Bugün topluluğumuza katılın!
          </h2>

          <h3 class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
            Etkinliklere, kaynaklara ve daha fazlasına özel erişim için kaydolun
          </h3>

          <div class="mt-8 flex items-center justify-center gap-x-6">
            <a
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="#"
            >
             Forumu keşfedin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <svg
            viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fill-opacity="0.7"
            ></circle>
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stop-color="#3b82f6"></stop>
                <stop offset="1" stop-color="#1d4ed8"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div class="py-4 max-w-screen-lg mx-auto">
        <div class="text-center mb-16">
          <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Sıkça Sorulan <span class="text-indigo-600">Sorular</span>
          </h3>
        </div>

        <div class="px-10 sm:px-16 sm:flex items-start mb-10">
          <h3 class="py-3 font-bold text-lg text-gray-900 w-3/12">Teknik Sorular</h3>
          <div class="w-9/12">
            <div class="flex items-start mb-8">
              <div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-md">
                <h1 class="text-gray-900 font-semibold mb-2">              
                Apartman yönetim sistemi nedir?
                </h1>
                <p class="text-gray-500 text-sm">
                Apartman yönetim sistemi, apartman, site veya toplu konutların yönetimini kolaylaştırmak için kullanılan yazılım ve uygulamalardır. Bu sistemler, aidat takibi, gider yönetimi, duyurular, rezervasyonlar ve diğer yönetimsel işleri dijital platformda düzenlemeye yardımcı olur.
                </p>
              </div>
            </div>
            <div class="flex items-start mb-8">
              <div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-md">
                <h1 class="text-gray-900 font-semibold mb-2">
                  Aidat ödemeleri nasıl yapılır?
                </h1>
                <p class="text-gray-500 text-sm">
                Aidat ödemeleri apartman yönetim sistemi üzerinden online olarak kredi kartı veya banka havalesi ile yapılabilir. Sistem, otomatik hatırlatmalar ve ödeme geçmişi gibi özellikler de sunar.
                </p>
              </div>
            </div>
            <div class="flex items-start mb-8">
              <div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-md">
                <h1 class="text-gray-900 font-semibold mb-2">
                Giderler nasıl takip edilir?
                </h1>
                <p class="text-gray-500 text-sm">
                Apartman yönetim sistemi, yapılan tüm harcamaların kayıt altına alınmasını ve raporlanmasını sağlar. Böylece tüm sakinler giderlerin nereye harcandığını görebilir ve şeffaflık sağlanır.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="px-10 sm:px-16 sm:flex items-start mb-10">
          <h3 class="py-3 font-bold text-lg text-gray-900 w-3/12">Ödeme Soruları</h3>
          <div class="w-9/12">
            <div class="flex items-start mb-8">
              <div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-md">
                <h1 class="text-gray-900 font-semibold mb-2">
                Duyurular nasıl yapılır?
                </h1>
                <p class="text-gray-500 text-sm">
                Apartman yönetim sistemi üzerinden yönetim tarafından yapılan duyurular, tüm sakinlere e-posta, SMS veya mobil uygulama bildirimleriyle iletilebilir. Ayrıca duyurular sistemin duyuru panosunda da görüntülenebilir.
                </p>
              </div>
            </div>
            <div class="flex items-start mb-8">
              <div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-md">
                <h1 class="text-gray-900 font-semibold mb-2">
                Güvenlik nasıl sağlanır?
                </h1>
                <p class="text-gray-500 text-sm">
                Apartman yönetim sistemi, kullanıcı verilerini korumak için şifreleme teknolojileri kullanır. Ayrıca, sadece yetkili kullanıcılar belirli bilgilere erişebilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" relative bg-violet-600">
        <div class="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            class="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 class="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Haber bültenimize abone ol
            </h2>
            <p class="mb-6 text-base text-indigo-200 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo. Sed ut perspiciatis unde omnis.
            </p>
            <form class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Email"
                required=""
                type="text"
                class="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />
              <a
                href="/"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </a>
            </form>
            <p class="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
            <a
              href="/"
              aria-label="Scroll down"
              class="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
