import * as React from "react";
import { Formik } from "formik";

import { useContext, useState } from "react";
import { UserContext, getAuthToken } from "../providers/UserProvider";
import { API_URL } from "../App";
import { useHistory } from "react-router-dom";

interface Props {}

export const Register: React.FC<Props> = () => {
  const context = useContext(UserContext);
  const history = useHistory();
  const [status, setStatus] = useState({ general: "", error: "", warning: "" });
  return (
    <div className="App">
      {/* <Header page="Avocado" /> */}
      <header>Register</header>
      <Formik
        initialValues={{ username: "" }}
        onSubmit={(values, { setSubmitting }) => {
          if (context.gUser && context.gUser.id) {
            getAuthToken().then((token) => {
              const post_data = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  uid: context.gUser?.id,
                  username: values.username,
                }),
              };

              fetch(API_URL + `/register`, post_data).then((res) => {
                res.json().then((json) => {
                  if (json.error || json.warning) {
                    setStatus(json);
                    setSubmitting(false);
                  } else {
                    setSubmitting(false);
                    history.push("/login");
                  }
                });
              });
            });
          }
        }}
      >
        {({
          values,

          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>{" "}
      {status.warning !== "" ? <h1>{status.warning}</h1> : null}
    </div>
  );
};
