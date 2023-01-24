import Head from 'next/head'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Home() {
  const [card, setCard] = useState([]);

  function add () {
    setCard([...card, Math.floor(Math.random()*905)]);
  }

  function deleteCard () {
    setCard(card.slice(0, card.length-1))
  }

  function clean () {
    setCard([])
  }

  return (
    <>
      <Head>
        <title>Pokemon Page</title>
        <meta name="description" content="Creator cards of pokemon." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box sx={{ width: '100%', maxWidth: 1000 }}>
          <Typography variant="h2" gutterBottom>Pokemon Page</Typography>
          <Divider variant="middle" />
          <Stack direction="row" spacing={2} class="stack">
            <Button variant="contained" color="success" onClick={add} >ADD</Button>
            <Button color="secondary" onClick={deleteCard} startIcon={<DeleteIcon />} >DELETE LAST</Button>
            <Button variant="outlined" color="error" onClick={clean} >CLEAR</Button>
          </Stack>

          <ImageList sx={{ width: 800, height: 500 }} cols={5} rowHeight={164}>
            {card?.map(item =>
              <ImageListItem key={item.img}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item}.png`}
                  alt={`pokemon number ${item}`}
                  loading="lazy"
                />
              </ImageListItem>
            )}
          </ImageList>
        </Box>
      </main>
    </>
  );
}