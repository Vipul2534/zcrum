import React from "react";
import { SignUp as ClerkSignUp } from "@clerk/nextjs"; // Renaming the imported SignUp component

const SignUpPage = () => { // Renaming the local component
  return <ClerkSignUp />; // Using the renamed imported component
};

export default SignUpPage; // Exporting the renamed local component