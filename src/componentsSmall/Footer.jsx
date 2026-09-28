import React from "react";

function Footer() {
  return (
    <div className="w-full flex justify-center items-center p-5 border-t border-gray-300/15">
      <p className="text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} Uroš Klječanin.
        <br /> All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
