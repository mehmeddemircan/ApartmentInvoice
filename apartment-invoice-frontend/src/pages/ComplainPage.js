import React, { Fragment } from "react";
import MainLayout from "../layouts/MainLayout";
import GenericFormTitle from "../components/formTitle/GenericFormTitle";
import ComplainForm from "../components/forms/ComplainForm";

const ComplainPage = () => {
  return (
    <MainLayout>
      <Fragment>
        <GenericFormTitle
          title="Sikayet Et"
          content="Bizim ekibimize katılarak , yeni projelere dahil olarak kendinizi geliştirebilirsiniz"
        />
        <ComplainForm />
      </Fragment>
    </MainLayout>
  );
};

export default ComplainPage;
