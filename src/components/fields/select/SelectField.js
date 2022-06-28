import { FormControl, FormHelperText, InputLabel, Select } from '@mui/material';
import fieldRoot from '../fieldRoot';

const SelectField = ({helperText, optionKey, children, formik, ...props}) => {
    const { fullWidth, label, name, required, size, variant } = props;
    const formControlProps = { label, variant, size, fullWidth, required };

    return (
        <FormControl {...formControlProps}>
            <InputLabel >{label}</InputLabel>
            <Select 
                {...(formik ? {
                    value: formik.values[name],
                    onChange: formik.handleChange,
                    error: formik.touched[name] && Boolean(formik.errors[name]),
                } : {})}
                {...props} 
            >
                {children}
            </Select>
            <FormHelperText>{formik.touched[name] && formik.errors[name]}{helperText}</FormHelperText>
        </FormControl>
    );
};

export default fieldRoot(SelectField);
