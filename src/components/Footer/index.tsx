import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React, { useState, useCallback } from "react";

function Footer() {
  const mapContainerStyle = {
    width: "300px",
    height: "300px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  Cầu Lông Vitory
                </h6>
                <p>Victory chỉ nhận đặt sân qua website www.datsan.link</p>
                <p>
                  Victory cam kết không tăng giá các ngày lễ, giữ xe miễn phí,
                  phục vụ đá lạnh miễn phí tại quày (hỏi nhân viên). Hân hạnh
                  được phục vụ quý khách.
                </p>
                <p>
                  Thời gian phục vụ: <span>5h-23h</span>
                </p>
                <span>(kể cả T7,CN và lễ)</span>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Thông Tin Liên Hệ
                </h6>
                <p>Địa chỉ : 33 Đường số 12, P.Trường Thọ, Thủ Đức, Tp.HCM</p>
                <p>Điện thoại: 090 66 00 468</p>
                <p>Website: www.datsan.link</p>
              </div>

              <div className="col-md-3 col-lg-3 col-xl-3   mx-auto mb-md-0 mb-4 mt-4">
                <LoadScript googleMapsApiKey="AIzaSyD3GLAPTpDNpIIQ5FqEWsSSfTkR_l88tg4">
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={10}
                  >
                    {/* Add any additional map components or markers here */}
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          Copyright 2024 © Vitory
        </div>
      </footer>
    </>
  );
}

export default Footer;
