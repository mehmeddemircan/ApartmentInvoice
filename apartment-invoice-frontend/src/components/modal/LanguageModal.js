import React, { Fragment, useEffect } from "react";

import cookies from "js-cookie";
import i18next from "i18next";
import { Modal, Tabs } from "antd";
import languages from "../../languages/Languages";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
const { TabPane } = Tabs;
const LanguageModal = ({ showLanguageModal, handleCloseLanguageModal }) => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  useEffect(() => {

    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  return (
    <Fragment>
      <Modal
        centered={true}
        open={showLanguageModal}
        footer={null}
        onCancel={handleCloseLanguageModal}
        width={1040}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab={t("mainPage.languageTab")} key="1">
            <div
              style={{
                maxHeight: 480,
                overflowY: "auto",
              }}
            >
              <div className="px-3 mt-2 mb-3">
                <h6 style={{ fontSize: 21, color: "#484848" }}>
                {t("mainPage.languageModal")}
                </h6>
              </div>

              <div class="container">
                <div class="d-flex justify-content-start row  gy-5">
                  {languages.map(
                    ({ code, name, country_code, country_name }) => (
                      <div
                        class="col col-lg-3 col-md-4 col-sm-12"
                        key={country_code}
                      >
                        <button
                          class=" w-100 btn btn-md btn-sm  btn-light rounded-pill p-3 my-2 "
                          onClick={() => {
                            i18next.changeLanguage(code);
                            handleCloseLanguageModal();
                          }}
                          style={{
                            opacity: currentLanguageCode === code ? 0.5 : 1,

                            border:
                              currentLanguageCode === code
                                ? "1px solid #1890ff"
                                : "1px solid rgb(221,221,221)",
                          }}
                        >
                          <span
                            className="d-inline-flex justify-content-center "
                            style={{ fontSize: "16px" }}
                          >
                            <img
                              src={`https://flagicons.lipis.dev/flags/4x3/${country_code}.svg`}
                              alt=""
                              class="img-fluid mx-2"
                              width={24}
                              height={24}
                            />
                            {name}
                          </span>
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    </Fragment>
  );
};

export default LanguageModal;
