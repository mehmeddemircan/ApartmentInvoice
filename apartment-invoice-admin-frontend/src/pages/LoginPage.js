import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { login } from "../redux/actions/AuthActions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // authentication işlemi
  const userLogin = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  // başarılı şekilde giriş yaparsa anasayfaya yönlendir
  useEffect(() => {
    if (auth.authenticate) {
      navigate("/", { replace: true });
    }
  }, [auth.authenticate, navigate]);

  return (
    <MainLayout>
       <div className="container h-100 my-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-4">
                <div className="d-flex flex justify-content-center">
               
                  <h4 className="my-0">Apartman Yönetim </h4>
                  <div></div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                     Admin Girişi
                    </p>

                    <form className="mx-1 mx-md-4">
                    
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0 mx-1">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0 mx-1">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Şifrenizi giriniz"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                       
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mb-5">
                        <a href="/forgot-password">Şifremi unuttum!</a>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn bg-black text-white btn-lg"
                          onClick={userLogin}
                        >
                        Giriş Yap
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
