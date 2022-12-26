import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Spinner,
} from "reactstrap";
import { Mail, Lock } from "react-feather";
import loginImg from "../../assets/login.png";
import { TOKEN_KEY } from "../../configs/constant";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthService } from "../../services/api.service";
import { toast } from "react-toastify";
import { ILogin } from "../../models/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const [errorText, setErrorText] = useState<string | null>(null);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [values, setValues] = useState<ILogin>({
    email: "",
    password: "",
  });

  const login = async (values: ILogin) => {
    // setErrorText(null);

    setShowLoader(true);
    setValues(values);
    // alert(values.email);
    try {
      const { user, token }: any = await AuthService.login(values);
      // console.log("data>>>>>>", user,token.token);

      // store token to localStorage
      localStorage.setItem(TOKEN_KEY, token.token);
      // console.log("token:", token);
      dispatch({ type: "SET_AUTH", payload: user });
      navigate("/user");
      toast.success("Login Successfully");
    } catch (error: any) {
      toast.error(error.message);
      // setErrorText(error.message);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <Row className="m-0 justify-content-center">
      <Col
        sm="8"
        xl="7"
        lg="10"
        md="8"
        className="d-flex justify-content-center"
      >
        <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
          <Row className="m-0">
            <Col
              lg="6"
              className="d-lg-block d-none text-center align-self-center px-1 py-0"
            >
              <img src={loginImg} alt="loginImg" />
            </Col>
            <Col lg="6" md="12" className="p-0">
              <Card className="rounded-0 mb-0 px-2">
                <CardBody className="mt-5 mb-5">
                  <h4>Login</h4>
                  <p>Welcome back, please login to your account.</p>
                  <Formik
                    initialValues={values}
                    onSubmit={async (values) => {
                      login(values);
                    }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string()
                        .required("Enter email")
                        .email("Enter valid email"),
                      password: Yup.string().required("Enter Password"),
                    })}
                  >
                    {(props) => {
                      const {
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                      } = props;
                      return (
                        <>
                          <Form onSubmit={handleSubmit}>
                            <Label>Email</Label>
                            <FormGroup className="position-relative has-icon-left">
                              <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`form-control ${
                                  touched.email && errors.email
                                    ? "is-invalid"
                                    : ""
                                }`}
                              />
                              {touched.email && errors.email && (
                                <div className="invalid-feedback">
                                  {errors.email}
                                </div>
                              )}
                              <div className="form-control-position">
                                <Mail size={15} />
                              </div>
                            </FormGroup>
                            <Label>Password</Label>
                            <FormGroup className="has-icon-left position-relative">
                              <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`${
                                  touched.password && errors.password
                                    ? "is-invalid"
                                    : ""
                                }`}
                              />
                              <div className="form-control-position">
                                <Lock size={15} />
                              </div>
                              {touched.password && errors.password && (
                                <div className="invalid-feedback">
                                  {errors.password}
                                </div>
                              )}
                            </FormGroup>
                            <FormGroup className="d-flex justify-content-between align-items-center">
                              <NavLink
                                to="/signup"
                                className="float-right text-primary"
                              >
                                Signup
                              </NavLink>
                            </FormGroup>
                            <div className="d-flex justify-content-center">
                              <Button
                                className="block"
                                color="primary"
                                type="submit"
                                disabled={showLoader}
                              >
                                {showLoader ? (
                                  <>
                                    <Spinner
                                      color="white"
                                      size="sm"
                                      type="grow"
                                    />
                                    <span className="ml-50">Loading...</span>
                                  </>
                                ) : (
                                  "Login"
                                )}
                              </Button>
                            </div>
                          </Form>
                        </>
                      );
                    }}
                  </Formik>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
export default Login;
