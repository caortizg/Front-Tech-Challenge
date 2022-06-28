import * as React from 'react';
import DialogMui from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Dialog = (props) => {
    return <DialogMui TransitionComponent={Transition} keepMounted {...props} />;
}

export default Dialog;
