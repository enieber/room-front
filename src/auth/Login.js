import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

import { login } from "./index";
import { Form } from "./styles";
import { Input, Button } from "../components";
import { translate } from "../locales";

function Login() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = translate("required");
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = translate("error_email");
        }
        if (!values.password) {
          errors.password = translate("required");
        } else if (values.password.length < 3) {
          errors.password = translate("error_password");
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password } = values;
        login(email, password, () => setSubmitting(false));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <Form>
          <Input
            id="email"
            label={translate("email")}
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email && touched.email && errors.email}
          />

          <Input
            id="password"
            label={translate("password")}
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={errors.password && touched.password && errors.password}
          />

          <Button onPress={() => {}}>{translate("sign_in")}</Button>

          <Link to="/register">
            <Button outline onPress={() => {}}>
              {translate("sign_up")}
            </Button>
          </Link>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
