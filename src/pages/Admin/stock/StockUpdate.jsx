import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function StockUpdate({ Rows }) {
    console.log(Rows)
  return (
    <form>
     <input type="text" />

      <Button
        variant="warning"
        className="m-2 "
        // onClick={() => handlepage(Rows)}
      >
        Edit
      </Button>
    </form>
  );
}
