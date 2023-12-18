import React from "react";

export const PhoneNotLoggedInSegment = () => {
  return (
    <div className="py-6">
      <a
        href="/login"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        Login
      </a>
     
    </div>
  );
};

export const NotLoggedInHeader = () => {
  return (
    <div class="hidden lg:flex lg:justify-end ">
      <a
        href="/login"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 me-3"
      >
        Login
      </a>
  
    </div>
  );
};