import React from 'react'
import MainLayout from '../layouts/MainLayout'
import AddedEmptyResult from '../components/results/AddedEmptyResult'
import FormButton from '../components/button/FormButton'
import SuccessResult from '../components/results/SuccessResult'
import ErrorResult from '../components/results/ErrorResult'
import EmptyResult from '../components/results/EmptyResult'
import { useNavigate } from 'react-router-dom'

const ResultsPage = () => {
    const navigate = useNavigate()
  return (
    <MainLayout>
          <AddedEmptyResult
        title="Burası birazcık boş gibi"
        content="İlk Yorumunu yaparak bizi mutlu edebilirsin , hem bizim için düşüncelerin önemli olduğunu bilmeni isteriz"
      />
      <SuccessResult
        resultMessage="Başarılı Şekilde Formunu aldık , teşekkür ederiz size geri dönüs sağlayacağız"
        buttonComponent={
          <div className="d-flex flex-row  justify-between gap-x-10">
            <FormButton
              title="Formlarıma Git"
              onClick={() => navigate("/my-forms", { replace: true })}
            />
            <FormButton
              title="Yeni Form Gönder"
              // onClick={handleSendAnotherForm}
            />
          </div>
        }
      />
      <ErrorResult
        title="Submission Failed"
        subTitle="Please check and modify the following information before resubmitting."
        extra={[
          <div className="d-flex flex-row  justify-between gap-x-10">
            <FormButton
              title="Formlarıma Git"
              onClick={() => navigate("/my-forms", { replace: true })}
            />
            <FormButton
              title="Yeni Form Gönder"
              // onClick={handleSendAnotherForm}
            />
          </div>,
        ]}
      />
      <EmptyResult />
    </MainLayout>
  )
}

export default ResultsPage