import * as React from "react";

interface propTypes {
    text: string,
}

const Log:React.FC<propTypes> = (props) => (
    <div
      className={b('log', props)}
    >
      <pre className={b('log__content')}>{props.text}</pre>
    </div>
);

export default Log;
