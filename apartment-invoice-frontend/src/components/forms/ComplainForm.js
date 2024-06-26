import React, { Fragment, useEffect, useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import {useDispatch, useSelector} from 'react-redux'
import { Select } from "antd";
import FormButton from "../button/FormButton";
import { SendComplain } from "../../redux/actions/ComplainAction";
import { SEND_COMPLAIN_RESET } from "../../redux/constants/ComplainConstants";
import {message} from 'antd'
const { Option } = Select;
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ComplainForm = () => {
  const auth = useSelector((state) => state.auth)
  const [userId,setUserId] = useState(auth.user.id)
  const [subject, setSubject] = useState("")
  const [messageContent, setMessageContent] = useState("")
  const dispatch = useDispatch()
  const handleSendComplain = () => {
    dispatch(SendComplain({userId,subject,messageContent}))
  }
  const sendComplain = useSelector((state) => state.complain.sendComplain);
useEffect(() => {
  setUserId(auth.user.id)
 if (sendComplain.isAdded) {
  dispatch({type:SEND_COMPLAIN_RESET})
  setSubject("")
  setMessageContent("")
  message.success("Başarılı şekilde şikayetiniz iletilmiştir")
 }
}, [dispatch,auth,sendComplain.isAdded])
  return (
    <Fragment>
      <div className="bg-white px-6 py-2 sm:py-32 lg:px-8">
        <form
          action="#"
          method="POST"
          className="mx-auto mt-3 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Subject 
              </label>
              <div className="mt-2.5">
                <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  type="name"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-1 border-gray-600 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Content 
              </label>
              <div className="mt-2.5">
                <textarea
                  rows={8}
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                  type="name"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-1 border-gray-600 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <FormButton title="Gönder" onClick={handleSendComplain} />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ComplainForm;
