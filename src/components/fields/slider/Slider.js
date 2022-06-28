
import fieldRoot from '../fieldRoot';
import { Box, FormHelperText, Grid, Slider as SliderMui, Typography } from '@mui/material';

const Slider = ({ error, formik, fullWidth, helperText, label, value, ...props }) => {
    const { name } = props;
    return (
        <Box fullWidth>
            <Typography id="input-slider"  sx={{marginBottom:3}}>{label}</Typography>
            <Grid container spacing={2} alignItems="center" sx={{paddingX:1}}>
                <Grid item xs>
                    <SliderMui
                        {...(formik ? {
                            value: formik.values[name],
                            onChange: formik.handleChange,
                        } : {})}
                        size="small"
                        valueLabelDisplay="on"
                        {...props}
                    />
                </Grid>
            </Grid>
            <FormHelperText error={formik && formik.touched[name] && Boolean(formik.errors[name])} >{formik.touched[name] && formik.errors[name]}{helperText}</FormHelperText>
        </Box>
    );
};

export default fieldRoot(Slider);