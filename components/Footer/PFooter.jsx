import React from "react";

export default function PFooter() {
  return (
    <footer className="py-5 text-white" style={{
      // background: "#D9D9D9"
    }}>
      <p className="text-center" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        color: "#828080"
        }}>
          POWERED BY  <img src="/images/logo.png" alt="..." style={{display: "inline", marginLeft: "10px", width:"90px", height:"max-content"}}/>
        </p>
    </footer>
  );
}
