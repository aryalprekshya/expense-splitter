import React, { useState } from "react";
import Month from "../components/component/Month";
import Expenses from "../components/component/Expenses";

export default function Dashboard() {
  return (
    <>
      <div className="container">
        <Month />
        <div className="expenses">
          <Expenses />
        </div>
      </div>
    </>
  );
}
