import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

import { Form } from "./styles";
import { Input, Button } from "../components";
import { translate } from "../locales";
import { createUser } from "./service";

const Register = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
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
        if (!values.username) {
          errors.username = translate("required");
        } else if (values.username.length < 3) {
          errors.username = translate("error_username");
        }
        return errors;
      }}
      onSubmit={(values, s) => {
        // console.log(s);
        const { username, email, password } = values;
        return createUser(username, email, password);
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
        <>
          <Input
            id="username"
            label={translate("username")}
            type="username"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            error={errors.username && touched.username && errors.username}
          />
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
          <Button
            outline
            onPress={() => {
              handleSubmit();
            }}
          >
            {translate("sign_up")}
          </Button>
          <Link to="/login">
            <Button onPress={() => {}}>{translate("sign_in")}</Button>
          </Link>
        </>
      )}
    </Formik>
  );
};

export default Register;
