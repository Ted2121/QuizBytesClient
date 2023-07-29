import { Box, Card, Grid } from '@mui/material';
import React, { useState } from 'react';
import ProfileInformationRow from '../components/ProfileInformationRow';
import SectionTitle from '../components/SectionTitle';
import { updateEmail, updateProfile } from "firebase/auth";

function ProfileInformationSection({auth, email: initialEmail, displayName: initialDisplayName }) {
    const [isNameEditable, setIsNameEditable] = useState(false);
    const [isEmailEditable, setIsEmailEditable] = useState(false);
    const [email, setEmail] = useState(initialEmail);
    const [displayName, setDisplayName] = useState(initialDisplayName);

    function handleClickEmailEdit() {
        setIsEmailEditable(true);
    }

    function handleClickNameEdit() {
        setIsNameEditable(true);
    }

    async function handleClickEmailSave(newEmail) {
        try {
            // console.log(auth.user);
            await updateEmail(auth.user, newEmail);
            setIsEmailEditable(false);
            setEmail(newEmail);
            console.log("Email updated successfully");
          } catch (error) {
            console.error("Error updating email:", error);
          }
    }

    async function handleClickNameSave(newDisplayName) {
        try {
            await updateProfile(auth.user, { displayName: newDisplayName });
            setIsNameEditable(false);
            setDisplayName(newDisplayName);
            console.log("Display name updated successfully");
          } catch (error) {
            console.error("Error updating display name:", error);
          }
    }

    return (
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    backgroundColor: 'grey.dark',
                    p: '10px',
                    overflow: 'auto',
                    borderRadius: '8px'
                }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection:'column',
                    alignItems:'center',
                }}>
                    <SectionTitle
                        text='Profile Information'
                        fontColor='white.main' />
                </Box>
                <ProfileInformationRow
                    criteria='Email:'
                    value={email}
                    onClickEdit={handleClickEmailEdit}
                    isEditable={isEmailEditable}
                    onClickSave={handleClickEmailSave} />
                <ProfileInformationRow
                    criteria='Display Name:'
                    value={displayName}
                    onClickEdit={handleClickNameEdit}
                    isEditable={isNameEditable} 
                    onClickSave={handleClickNameSave}/>
            </Card>
    )
}

export default ProfileInformationSection;