import  { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthService } from "../../services/api.service";
import { toast } from "react-toastify";
import { IRegister } from "../../models/auth";

const Signup = () => {
  const navigate = useNavigate();

  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>();
  const [values, setValues] = useState<IRegister>({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signup = async (values: IRegister) => {
    setShowLoader(true);
    setValues(values);
    // alert(values.email);
    try {
      // console.log("values",values)
      await AuthService.signup(values);
      toast.success("Signup Successfully");
      navigate("/login");
    } catch (error: any) {
      console.log("error", error);
      setErrorText(error.response.data.error);
      toast.error(errorText);
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
            <Card className="rounded-0 mb-0 px-2">
              <CardBody className="mt-5 mb-5">
                <h4>Sign-Up</h4>
                <Formik
                  initialValues={values}
                  onSubmit={async (values) => {
                    signup(values);
                  }}
                  validationSchema={Yup.object().shape({
                    firstName: Yup.string().required("Enter first name"),
                    lastName: Yup.string().required("Enter last name"),
                    userName: Yup.string().required("Enter user name"),
                    email: Yup.string()
                      .required("Enter email")
                      .email("Enter valid email"),
                    password: Yup.string().required("Enter Password"),
                    confirmPassword: Yup.string().required(
                      "Enter confirm password"
                    ),
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
                        <Form onSubmit={handleSubmit} className="mt-5">
                          <Row>
                            <Col lg="6" md="12" className="p-0">
                              <Label>First name</Label>
                              <FormGroup className="position-relative has-icon-left">
                                <Input
                                  type="text"
                                  name="firstName"
                                  placeholder="First name"
                                  value={values.firstName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={`form-control ${
                                    touched.firstName && errors.firstName
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                />
                                {touched.firstName && errors.firstName && (
                                  <div className="invalid-feedback">
                                    {errors.firstName}
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col lg="6" md="12" className="mr-1">
                              <Label>Last name</Label>
                              <FormGroup className="position-relative has-icon-left">
                                <Input
                                  type="text"
                                  name="lastName"
                                  placeholder="Last name"
                                  value={values.lastName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={`form-control ${
                                    touched.lastName && errors.lastName
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                />
                                {touched.lastName && errors.lastName && (
                                  <div className="invalid-feedback">
                                    {errors.lastName}
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6" md="12" className="p-0">
                              <Label>User Name</Label>
                              <FormGroup className="position-relative has-icon-left">
                                <Input
                                  type="text"
                                  name="userName"
                                  placeholder="User name"
                                  value={values.userName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={`form-control ${
                                    touched.userName && errors.userName
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                />
                                {touched.userName && errors.userName && (
                                  <div className="invalid-feedback">
                                    {errors.userName}
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col lg="6" md="12" className="mr-1">
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
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6" md="12" className="p-0">
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

                                {touched.password && errors.password && (
                                  <div className="invalid-feedback">
                                    {errors.password}
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col lg="6" md="12" className="mr-1">
                              <Label>Confirm Password</Label>
                              <FormGroup className="has-icon-left position-relative">
                                <Input
                                  type="password"
                                  name="confirmPassword"
                                  placeholder="Confirm password"
                                  value={values.confirmPassword}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={`${
                                    touched.confirmPassword &&
                                    errors.confirmPassword
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                />

                                {touched.confirmPassword &&
                                  errors.confirmPassword && (
                                    <div className="invalid-feedback">
                                      {errors.confirmPassword}
                                    </div>
                                  )}
                              </FormGroup>
                            </Col>
                          </Row>
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
                                "Sign-up"
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
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
export default Signup;
