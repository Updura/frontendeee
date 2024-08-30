export default function signup() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
     
        <div className="container ">
          <div className="row justify-content-center ">
            <div className="col-md-6">
              <div className="card">
                <h4 class="card-header text-center text-bg-dark mb-1 ">
                  <b>Sign Up ถ้าคุณแน่จริงสมัครเข้ามาลย</b>
                </h4>

                <div class="card-body">
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        Email อีเมลที่คุณจะไม่มีวันใช้อีก
                      </label>

                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          <i class="bi bi-envelope"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        password รหัสที่คุณจะไม่มีวันบอกใคร
                      </label>
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          <i class="bi bi-key-fill"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="password"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <label for="inputEmail4" class="form-label">
                        Username ชื่อของคุณที่จะใช่ที่นี้แค่ที่เดียว
                      </label>
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          <i class="bi bi-person"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-info">
                        Sign UP กดมาเลยถ้าคุณแน่จริงและกลารับกับความจริง
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
