import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '../../dialog/Dialog';
import SpotCard from './SpotCard';

const SpotDialog = ({ spotIds, onClose, open }) => ((spotIds && spotIds.length) && (
    <Dialog open={open} onClose={onClose} >
        <DialogContent>
            {spotIds.map((spotId) => <SpotCard key={`spot_card_${spotId}`} spotId={spotId} />)}
        </DialogContent>
    </Dialog>
))

export default SpotDialog;
