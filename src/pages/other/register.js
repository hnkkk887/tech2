import { useState } from "react";
import cogoToast from "@hasanm95/cogo-toast";
import { useRouter } from 'next/router';
import { authRegister } from "../../store/slices/auth";
import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    postCode: "",
    address: ""
  });
  const [terms, setTerms] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = e => setData(prev => ({...prev, [e.target.name]: e.target.value}));

  function handleSubmit(e) {
    e.preventDefault();

    if(!terms) {
      cogoToast.error("In order to create an account you have to accept the terms and policy", { position: "bottom-left" });
      return;
    }
    
    dispatch(authRegister(data)).then(() => router.replace('/other/my-account')).catch(e => cogoToast.error(e, { position: "bottom-left" }));
  }

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Register">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Register</li>
        </ol>
      </BreadcrumbOne>
      <div className="login-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="justify-content-center">
            <Col xl={6} md={10}>
              <div className="login-wrap">
                <div className="heading-s1 space-mb--20">
                  <h3>Create An Account</h3>
                </div>
                <div>
                  <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        maxLength="255"
                        minLength="2"
                        required
                        className="form-control"
                        name="firstName"
                        placeholder="First name"
                        autoFocus
                        value={data.firstName}
                        onChange={handleChange}
                      />
                    </div>                    
                    
                    <div className="mb-3">
                      <input
                        type="text"
                        maxLength="255"
                        minLength="2"
                        required
                        className="form-control"
                        name="lastName"
                        placeholder="Last name"
                        value={data.lastName}
                        onChange={handleChange}
                      />
                    </div>                    
                    
                    <div className="mb-3">
                      <input
                        type="text"
                        maxLength="255"
                        minLength="2"
                        required
                        className="form-control"
                        name="address"
                        placeholder="Address"
                        value={data.address}
                        onChange={handleChange}
                      />
                    </div>                 
                    
                    <div className="mb-3">
                    <div className="custom_select">
                      <select required className="form-control" name="country" onChange={handleChange}>
                        <option value="">Select a country...</option>
                        <option value="Albania">Albania</option>
                        <option value="Austria">Austria</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Greece">Greece</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Italy">Italy</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lituania">Lituania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Malta">Malta</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Norway">Norway</option>
                        <option value="Poland">Poland</option>
                        <option value="Romania">Romania</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Spain">Spain</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Turkey">Turkey</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                    </div>
                  </div>              
                    
                    <div className="mb-3">
                      <input
                        type="text"
                        maxLength="255"
                        minLength="2"
                        required
                        className="form-control"
                        name="city"
                        placeholder="City / Town"
                        value={data.city}
                        onChange={handleChange}
                      />
                    </div>   

                    <div className="mb-3">
                      <input
                        type="text"
                        maxLength="255"
                        minLength="2"
                        required
                        className="form-control"
                        name="postCode"
                        placeholder="Postcode / ZIP"
                        value={data.postCode}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        maxLength="255"
                        minLength="5"
                        required
                        className="form-control"
                        name="phone"
                        placeholder="Phone"
                        value={data.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        maxLength="255"
                        minLength="5"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Email address"
                        value={data.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="password"
                        maxLength="255"
                        minLength="5"
                        required
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={data.password}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="login-footer mb-3">
                      <div className="check-form">
                        <div className="custom-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox1"
                            vaue={terms}
                            onChange={() => setTerms(prev => !prev)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox1"
                          >
                            <span>I agree to terms & Policy.</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="login"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <div className="different-login">
                    <span> or</span>
                  </div>
                  {/* <ul className="btn-login text-center">
                    <li>
                      <a href="#" className="btn btn-facebook">
                        <FaFacebookF />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-google">
                        <FaGooglePlusG />
                        Google
                      </a>
                    </li>
                  </ul> */}
                  <div className="form-note text-center space-mt--20">
                    Already have an account?{" "}
                    <Link href="/other/login">
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default Register;