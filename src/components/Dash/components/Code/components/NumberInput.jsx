import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
export default function NumberInput({ fontSize, setFontSize }) {
    return (
        <div className='number-input'>
            <IconButton aria-label="subtract" onClick={() => setFontSize(fontSize - 1)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <RemoveIcon />
                </div>
            </IconButton>
            <input type="text" name="size" id="size" value={fontSize} readOnly />
            <IconButton aria-label="" size="large" onClick={() => setFontSize(fontSize + 1)}>
                <AddIcon />
            </IconButton>
        </div>
    )
}
