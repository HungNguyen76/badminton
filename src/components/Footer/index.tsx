

export default function Footer({ handleBackToTop }: any) {
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7837.3456139079235!2d106.754685!3d10.836332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527ae185ad3af%3A0xefcea983642587f9!2zU8OibiBD4bqndSBMw7RuZyBWaWN0b3J5!5e0!3m2!1sen!2sus!4v1715611425655!5m2!1sen!2sus" width="450" height="200" loading="lazy" />
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
