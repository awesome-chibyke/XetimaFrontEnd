/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectOneUserAction,
  resetUserState,
  adminEditUserAction,
} from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
import { Route, Redirect, useParams } from "react-router-dom";

const AdminUserEdit = () => {
  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, user } = allStateObject;
  const { singleUser } = user;
  let { unique_id } = useParams();

  const [first_name, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [last_name, setLastName] = useState("");

  useEffect(() => {
    if (singleUser.unique_id !== unique_id) {
      dispatch(selectOneUserAction({ unique_id, loginData }));
    } else {
      setFirstName(singleUser.first_name);
      setAddress(singleUser.address);
      setCity(singleUser.city);
      setZipCode(singleUser.zip_code);
      setState(singleUser.state);
      setCountry(singleUser.country);
      setLastName(singleUser.last_name);
    }
  }, []);

  let loadingStatus = false;
  if (user.loading === true) {
    loadingStatus = true;
  }
  const { error: errorMessage, success: successMessage } = ErrorSuccessHook(
    user.success,
    user.error,
    user.message,
    user,
    loadingStatus
  );

  useEffect(() => {
    return () => {
      dispatch(resetUserState());
    };
  }, []);
  return (
    <>
      <div>
        <section
          className="bg-dark-body bg-food-white pt-80 pb-20"
          data-overlay={7}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 bg-food-white">
                <div className="text-center">
                  <h2 className="page-title text-white" />
                  <ol className="breadcrumb bg-transparent justify-content-center">
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    />
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-50" style={{ backgroundColor: "#fafbfd" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12">
                <h2 className="text-center">Profile</h2>
                <>
                  {errorMessage && (
                    <p className="alert alert-danger  text-center">
                      {errorMessage}
                    </p>
                  )}

                  {successMessage && (
                    <p className="alert alert-success  text-center">
                      {successMessage}
                    </p>
                  )}
                </>

                <div className="container">
                  <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                      <div className="card h-300">
                        <div className="card-body">
                          <div className="account-settings">
                            <div className="user-profile">
                              <div className="user-avatar">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                  alt="Maxwell Admin"
                                />
                              </div>
                              <h5 className="user-name">
                                {singleUser.first_name}
                              </h5>
                              <h6 className="user-email">{singleUser.email}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                      <div className="card h-450">
                        <div className="card-body">
                          <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <h6 className="mb-2 text-primary">
                                Personal Details
                              </h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label htmlFor="fullName">First Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="first_name"
                                  placeholder="Enter First name"
                                  value={first_name}
                                  onChange={(e) => setFirstName(e.target.value)}
                                />
                                <span className="error_displayer err_first_name"></span>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label htmlFor="eMail">Last Namme</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="last_name"
                                  placeholder="Enter Last Name"
                                  value={last_name}
                                  onChange={(e) => setLastName(e.target.value)}
                                />
                                <span className="error_displayer err_last_name"></span>
                              </div>
                            </div>
                          </div>
                          <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <h6 className="mt-3 mb-2 text-primary">
                                Address
                              </h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label htmlFor="Street">Street Address</label>
                                <input
                                  type="name"
                                  className="form-control"
                                  id="address"
                                  placeholder="Enter Street Address"
                                  value={address}
                                  onChange={(e) => setAddress(e.target.value)}
                                />
                                <span className="error_displayer err_address"></span>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label htmlFor="ciTy">Country</label>
                                <input
                                  type="name"
                                  className="form-control"
                                  id="country"
                                  placeholder="Enter Country"
                                  value={country}
                                  onChange={(e) => setCountry(e.target.value)}
                                />
                                <span className="error_displayer err_country"></span>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label htmlFor="ciTy">City</label>
                                <input
                                  type="name"
                                  className="form-control"
                                  id="city"
                                  placeholder="Enter City"
                                  value={city}
                                  onChange={(e) => setCity(e.target.value)}
                                />
                                 <span className="error_displayer err_city"></span>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label htmlFor="sTate">State</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="state"
                                  placeholder="Enter State"
                                  value={state}
                                  onChange={(e) => setState(e.target.value)}
                                />
                                <span className="error_displayer err_state"></span>
                              </div>
                            </div>

                            <div className="form-group">
                              <label htmlFor="zIp">Zip Code</label>
                              <input
                                type="text"
                                className="form-control"
                                id="zip_code"
                                placeholder="Zip Code"
                                value={zip_code}
                                onChange={(e) => setZipCode(e.target.value)}
                              />
                              <span className="error_displayer err_zip_code"></span>
                            </div>
                          </div>
                          <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="text-right">
                                {loginData.isLogged === true ? (
                                  <button
                                    type="button"
                                    onClick={async () =>
                                      dispatch(
                                        await adminEditUserAction({
                                          loginData,
                                          first_name,
                                          last_name,
                                          country,
                                          state,
                                          city,
                                          address,
                                          zip_code,
                                        })
                                      )
                                    }
                                    className="btn btn-primary btn-block w-p100 mt-15"
                                  >
                                    {user.loading === true
                                      ? "Updating User....."
                                      : "Update"}
                                  </button>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminUserEdit;
