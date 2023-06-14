import React from 'react'
import QuizSelector from '../layouts/QuizSelector'
import Box from '@mui/material/Box'
import DecorativeCircle from '../components/DecorativeCircle'

function Quiz() {
    const circleColor="#f4c1b2"
    return (
        <Box
            sx={{
                position: 'relative',
                // minWidth: '100%',
                maxWidth: '90vw',
                top: '15vh',
                maxHeight: '60vh'
            }}
        >
            <QuizSelector />
            <DecorativeCircle 
            color={circleColor} 
            sx={{
                top: {xs:'15vh', sm:'60vh'},
                left: {xs:'-80vw', sm:'-40vw', md:'-30vw', lg:'-20vw', xxl:'-15vw'},
                height: {xs:'650px', sm:'800px', xl:'1000px', xxl:'1600px'},
                width: {xs:'650px', sm:'800px', xl:'1000px', xxl:'1600px'}
            }}
            />
            <DecorativeCircle 
            color={circleColor} 
            sx={{
                top: {sm:'-40vh', md:'-70vh', lg:'-50vh', xxl:'-30vh'},
                left: {sm:'40vw', md:'55vw', lg:'65vw', xl:'70vw', xxl:'70vw'},
                height: {xs:'650px', sm:'800px', xl:'1000px', xxl:'1600px'},
                width: {xs:'650px', sm:'800px', xl:'1000px', xxl:'1600px'},
                display: {xs:'none', sm:'block'},
                }}/>

        </Box>
    )
}

export default Quiz