import React from 'react';

function fieldRoot(Component) {
    function FieldRoot(props) {
        return (
            <Component
                fullWidth={true}
                variant="outlined"
                size="small"
                {...props}
            />
        );
    }

    return FieldRoot;
}

export default fieldRoot;
