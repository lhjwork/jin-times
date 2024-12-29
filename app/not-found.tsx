import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const NotFound: NextPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Go back to home</Link>
    </div>
  );
};

export default NotFound;
