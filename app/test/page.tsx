import Card from "@/components/Card";
import React from "react";

const Test = () => {
  return (
    <div className="w-full h-screen flex-center flex-col md:flex-row gap-5 p-5">
      <Card
        img="/images/vercel.svg"
        title="Vercel"
        description="Vercel is a cloud platform for static sites and Serverless Functions."
      />
      <Card
        img="/images/next.svg"
        title="Next.js"
        description="Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications."
      />
    </div>
  );
};

export default Test;
// '/' Home page
// '/about' About page
// '/contact' Contact page
