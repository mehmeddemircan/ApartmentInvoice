
import React, { Fragment } from 'react'
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const HomeSection = () => {
  const { t } = useTranslation();

  return (
   <Fragment>
     <div className="container mx-auto">
        <hr />
      </div>
     
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("mainPage.header1")}</h2>
            <p class="mb-4">          {t("mainPage.section1")}
</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
    </div>

   </Fragment>
  )
}
export default HomeSection 