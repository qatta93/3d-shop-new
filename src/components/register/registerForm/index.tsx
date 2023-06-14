import Button from "@/components/button";
import Input from "@/components/input";
import { Formik } from "formik";

export const RegisterForm = () => {

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.name) {
            errors.name = "What is your name?";
          }
          if (!values.password) {
            errors.password = "What is your password?";
          }
          if (
            values.password &&
            !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)
          ) {
            errors.password =
              "Your password should have at least 8 characeters, 1 letter and 1 digit";
          }
          if (values.password !== values.repeatPassword) {
            errors.repeatPassword = "Please make sure your passwords match";
          }
          if (!values.email) {
            errors.email = "Please provide your email address";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            action=""
            className="flex flex-col space-y-3 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <Input
              state={errors.name ? 'error' : 'default'}
              label={"Name"}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={"Name*"}
              className={"btn-xs"}
              name={"name"}
              startIcon={"user"}
            />
            <p className="text-error-light text-xs">{errors.name}</p>
            <Input
              state={errors.email ? 'error' : 'default'}
              label={"Email"}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={"Email address*"}
              className={"btn-xs"}
              name={"email"}
              startIcon={"email"}
            />
            <p className="text-error-light text-xs">{errors.email}</p>
            <Input
              state={errors.password ? 'error' : 'default'}
              label={"Password"}
              type={"password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={"Password*"}
              className={"btn-xs"}
              name={"password"}
              startIcon={"lock"}
            />
            <p className="text-error-light text-xs">{errors.password}</p>
            <Input
              state={errors.repeatPassword ? 'error' : 'default'}
              label={"Password"}
              type={"password"}
              value={values.repeatPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={"Repeat password*"}
              className={"btn-xs"}
              name={"repeatPassword"}
              startIcon={"lock"}
            />
            <p className="text-error-light text-xs">{errors.repeatPassword}</p>
            <Button
              variant={"primary"}
              className={"uppercase btn-xs"}
              name={"continue"}
              type={"submit"}
              disabled={isSubmitting}
            >
              REGISTER
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};
