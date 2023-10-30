import React, { Fragment } from "react";

const TopForm = () => {
  return (
    <Fragment>
      <h4 className="text-center text-info text_shdow">
        فعالیت های خود را وارد کنید
      </h4>
      <form>
        <div className="form-group d-flex">
          <input type="text" className="form-control" />
          <button type="submit" className="btn btn-success me-1">
            ثبت
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default TopForm;
