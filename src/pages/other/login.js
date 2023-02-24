import { useState } from "react";
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { authLogin } from "../../store/slices/auth";
import cogoToast from "@hasanm95/cogo-toast";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = e => setData(prev => ({...prev, [e.target.name]: e.target.value}));

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(authLogin(data)).then(() => router.replace('/other/my-account')).catch(e => cogoToast.error(e, { position: "bottom-left" }));
  }

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Login">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Login</li>
        </ol>
      </BreadcrumbOne>
      <div className="login-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="justify-content-center">
            <Col xl={6} md={10}>
              <div className="login-wrap">
                <div className="heading-s1 space-mb--20">
                  <h3>Login</h3>
                </div>
                <div>
                  <form method="post" onSubmit={handleSubmit}>
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
                   
                    <div className="mb-3">
                      <button
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="login"
                      >
                        Log in
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
                    Don't Have an Account?{" "}
                    <Link href="/other/register">
                      Sign up now
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

export default Login;
