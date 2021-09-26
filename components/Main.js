import React from "react";

import { Modal } from "./Modal";
import { Text } from "./Text";

export function Main() {
  return (
    <div>
      <div className={'main'}>
        <h2>Choose the day<br/>for the meeting</h2>
        <h3>We encourage you to book your<br/>appointment online.<br/>This will save you time.</h3>

        <Modal>
          <Text/>
        </Modal>
      </div>
    </div>
  );
}
