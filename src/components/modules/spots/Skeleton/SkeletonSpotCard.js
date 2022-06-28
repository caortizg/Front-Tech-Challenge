import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Card, CardContent, Divider, Grid } from '@mui/material';

const SkeletonSpotCard = () => {
    return (
        <Card sx={{ marginBottom: 1 }}>
            <Skeleton variant="rectangular" height={100} />
            <CardContent sx={{ paddingTop: 1 }} >
                <Skeleton variant="h5" sx={{ width: '50%' }} />
                <Skeleton variant="text" />
                <Divider sx={{ marginY: 1 }} />
                <Grid container justifyContent="flex-start" spacing={2}>
                    <Grid item  >
                        <Skeleton variant="text" sx={{ width: '100px' }} />
                    </Grid>
                    <Grid item  >
                        <Skeleton variant="text" sx={{ width: '100px' }} />
                    </Grid>
                    <Grid item  >
                        <Skeleton variant="text" sx={{ width: '100px' }} />
                    </Grid>
                    <Grid item xs lg md sm >
                    </Grid>
                    <Grid item>
                        <Skeleton variant="circular" width={40} height={40} />
                    </Grid>
                    <Grid item xs={12} lg={12} md={12} sm={12}>
                        <Skeleton variant="text" sx={{ width: '50%' }} />
                        <Skeleton variant="text" sx={{ width: '50%' }} />
                        <Skeleton variant="text" sx={{ width: '50%' }} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default SkeletonSpotCard;