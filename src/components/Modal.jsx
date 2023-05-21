import React from "react";
const Modal = ({ img }) => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-transparent border-0">
          <div class="modal-header pb-0 border border-0">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              style={{ maxHeight: "80vh" }}
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
