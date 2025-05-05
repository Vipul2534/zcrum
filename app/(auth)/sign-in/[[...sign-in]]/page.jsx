import React from "react";
import { SignIn as ClerkSignIn } from "@clerk/nextjs"; // Renaming the imported SignIn component

const SignInPage = () => { // Renaming the local component
  return <ClerkSignIn/>; // Using the renamed imported component
};

export default SignInPage; // Exporting the renamed local component
