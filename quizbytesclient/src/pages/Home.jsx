import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import HomeQuiz from '../components/HomeQuiz';
import TryDemoButton from '../components/TryDemoButton';
import SignInButton from '../components/LogInButton';
import SignUpButton from '../components/SignUpButton';

function Home() {
  return (
    <Grid
      container
      spacing={2}
      columns={12}
      sx={{
        p: '2rem'
      }}>
      <Grid item xxl={2} sx={{
        display: { xs: 'none', xxl: 'block' }
      }} />
      <Grid
        item xs={12}
        lg={4}
        xxl={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Box
          sx={{
            maxWidth: { xxs: '90vw', sm: '376px', xl: '450px', xxl: '560px' }
          }}>
          <Typography
            variant='h1'
            fontWeight={500}>
            Quizzes for Students
          </Typography>
          <Typography sx={{
            fontSize: {
              xxs: '1.5rem'
            }
          }}>
            And before you ask yourself whether you are
            a student or not, I'll dare answer that for you.
          </Typography>
          <Typography sx={{
            fontSize: {
              xxs: '1.2rem'
            }
          }}>
            Yes, you are!
          </Typography>
          <Typography sx={{
            fontSize: {
              xxs: '1.2rem'
            }
          }}>
            And I can prove it.
          </Typography>

        </Box>
      </Grid>
      <Grid
        item xs={12}
        lg={4}
        xxl={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <HomeQuiz />
      </Grid>
      <Grid
        item xs={12}
        lg={4}
        xxl={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          // flexDirection:'column'
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: { xxs: '90vw', sm: '400px', xl: '450px', xxl: '560px' },
            justifyContent: 'end',
            paddingBottom: '20px'
          }}>
          <Typography
            variant='h1'
            fontWeight={500}>
            Quizzes for Anyone
          </Typography>
          <Typography sx={{
            fontSize: {
              xxs: '1.5rem'
            }
          }}>
            who wants to learn something new
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row'
            }}>
            <Typography
              sx={{
                fontSize: {
                  xxs: '1.2rem'
                },
                marginRight: '10px'
              }}>
              Feel free to
            </Typography>
            <TryDemoButton />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '10px'
            }}>
            <SignInButton marginLeft='0px' />
            <Typography sx={{
              fontSize: {
                xxs: '1.2rem'
              },
              marginLeft: '10px'
            }}>
              if you already have an account
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '10px'
            }}>
            <Typography sx={{
              fontSize: {
                xxs: '1.2rem'
              },
            }}>
              Or
            </Typography>
            <SignUpButton marginLeft='10px' />
            <Typography sx={{
              fontSize: {
                xxs: '1.2rem'
              },
              marginLeft: '10px'
            }}>
              to start your adventure.
            </Typography>
          </Box>

        </Box>
      </Grid>
      <Grid xxl={2}
        sx={{
          display: { xs: 'none', xxl: 'block' }
        }} />
    </Grid>
  )
}

export default Home;