import {React} from 'react'
import {Tooltip} from 'react-bootstrap';

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Bank Transfer
    </Tooltip>
  );

export default renderTooltip