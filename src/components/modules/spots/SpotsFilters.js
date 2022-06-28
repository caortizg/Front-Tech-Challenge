import React from 'react';
import { useFormik } from 'formik';
import SelectField from '../../fields/select/SelectField';
import Slider from '../../fields/slider/Slider';
import { Grid, MenuItem } from '@mui/material';
import ButtonPrimary from '../../button/ButtonPrimary';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setFilters } from './spotsSlice';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const validationSchema = Yup.object().shape({
});
const InputType = (props) => {
    const { t } = useTranslation();
    return (
        <SelectField label={t(`spots.type`)} name="spot_type_id" {...props} >
            <MenuItem value=''></MenuItem>
            <MenuItem value={1}>{t(`enum.spot_type_id.1`)}</MenuItem>
            <MenuItem value={2}>{t(`enum.spot_type_id.2`)}</MenuItem>
            <MenuItem value={3}>{t(`enum.spot_type_id.3`)}</MenuItem>
            <MenuItem value={4}>{t(`enum.spot_type_id.4`)}</MenuItem>
        </SelectField>
    );
};
const InputTerm = (props) => {
    const { t } = useTranslation();
    return (
        <SelectField label={t(`spots.term`)} name="term" {...props} >
            <MenuItem value=''></MenuItem>
            <MenuItem value={1}>{t(`enum.term.1`)}</MenuItem>
            <MenuItem value={2}>{t(`enum.term.2`)}</MenuItem>
            <MenuItem value={3}>{t(`enum.term.3`)}</MenuItem>
        </SelectField>
    );
};
const InputSquareSpace = (props) => {
    const { t } = useTranslation();
    return (
        <Slider
            name="squareSpace"
            label={t(`spots.square_space`)}
            min={1}
            max={1000}
            {...props}
        />
    );
};

const SpotsFilters = (props) => {
    const initialValues = useSelector(selectFilters);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(setFilters(values))
            return true;
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container justifyContent="flex-start" spacing={1}>
                <Grid item xs={12} lg={12} md={12} sm={12}>
                    <InputType formik={formik} />
                </Grid>
                <Grid item xs={12} lg={12} md={12} sm={12}>
                    <InputTerm formik={formik} />
                </Grid>
                <Grid item xs={12} lg={12} md={12} sm={12} sx={{ paddingRight: 1.5 }}>
                    <InputSquareSpace formik={formik} />
                </Grid>
                <Grid item xs={12} lg={12} md={12} sm={12}>
                    <ButtonPrimary type="submit" disabled={formik.isSubmitting} fullWidth>{t('spots.submit_filters')}</ButtonPrimary>
                </Grid>
            </Grid>
        </form>
    )
}

export default SpotsFilters;