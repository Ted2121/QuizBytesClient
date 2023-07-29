import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function ProfileInformationRow({ criteria, value, onClickEdit, isEditable, onClickSave }) {
    const [input, setInput] = useState('');

    function handleOnClickSave() {
        onClickSave(input)
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: 1,
            mt: '20px',
            ml: '10px'
        }}>
            <Typography sx={{
                fontSize: '1rem',
                color: 'white.main',
            }}>
                {criteria}
            </Typography>
            {isEditable ?
                <TextField
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={value}
                    size='small'
                    sx={{
                        '& .MuiInputBase-root': {
                            backgroundColor: 'white.main',
                            maxHeight: '30px',
                        },
                    }} />
                : (<Typography sx={{
                    fontSize: '1rem',
                    color: 'white.main',
                }}>
                    {value}
                </Typography>)}
            {onClickEdit && isEditable ? (
                <Button
                    variant='outlined'
                    onClick={handleOnClickSave}
                    sx={{
                        maxHeight: '30px'
                    }}>
                    Save
                </Button>
            ) :
                (
                    <Button
                        variant='outlined'
                        onClick={onClickEdit}
                        sx={{
                            maxHeight: '30px'
                        }}>
                        Edit
                    </Button>
                )}
        </Box>
    )
}

export default ProfileInformationRow