import * as React from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import { useDispatch, useSelector } from 'react-redux';
import { findSpotsAsync, selectSpot } from './spotsSlice';
import StepperImages from '../../stepper/StepperImages';
import { Card, CardContent, Chip, Divider, Grid, IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { mapsNavigate } from '../../map/utils';

const SpotCard = ({ spotId }) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const spot = useSelector(state => selectSpot(state, spotId));

    React.useEffect(() => {
        if (spotId && !spot._completeData) {
            dispatch(findSpotsAsync(spot.id))
        }
    }, [spot]);

    const coordinates = spot && spot._completeData && spot.location.coordinates;


    return ((spot && spot._completeData) && (
        <Card sx={{ marginBottom: 1 }}>
            {spot.photos && (
                <StepperImages images={spot.photos.map(photo => ({ path: photo, label: spot.name }))} />
            )}
            <CardContent sx={{ paddingTop: 0 }} >
                <Typography gutterBottom variant="h5" component="div">{spot.name} {spot.alias && (' - ' + spot.alias)}</Typography>
                <DialogContentText>{spot.description}</DialogContentText>
                <Divider sx={{ marginY: 1 }} />
                <Grid container justifyContent="flex-start" spacing={2}>
                    <Grid item xs lg md sm >
                        <Chip label={t(`spots.type`) + ': ' + t(`enum.spot_type_id.${spot.spot_type_id}`)} size="small" />
                        <Chip label={t(`spots.term`) + ': ' + t(`enum.term.${spot.term}`)} size="small" />
                        <Chip label={t(`spots.square_space`) + ': ' + spot.square_space} size="small" />
                    </Grid>
                    <Grid item>
                        <IconButton color="primary" component="span" onClick={() => mapsNavigate(coordinates[1], coordinates[0])}>
                            <FmdGoodOutlinedIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} lg={12} md={12} sm={12}>
                        {spot.phone && (<div><b>{t(`spots.phone`)} :</b> {spot.phone} </div>)}
                        {spot.street && (<div><b>{t(`spots.street`)} :</b> {spot.street} </div>)}
                        {spot.reference && (<div>{spot.reference}</div>)}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    ));
}

export default SpotCard; 