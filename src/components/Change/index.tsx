import React from 'react';
// import cat from '../assets/images/catscratch.png';
import CardCatScratch from '../CardCatscratch/index.js';
import CardCatClicker from '../CardCatclicker/index.js';
import AccordionCard from '../AccordionCard/accordionCard';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { AccordionSummary, AccordionDetails, Box, Accordion, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Paper } from '@mui/material';
import ReactImg from '../assets/images/react.png';

import 'animate.css';

function mainDesc(){
    return  ( <Box className='App-main'> <div className="Hello-world">Hello World!<br/></div>
        I am an incoming CSU Stanislaus Computer Science student for Spring 2024.
        I am also a Front-end web developer for HackMerced, a New Technologist Alumna from Microsoft M365 Team and Cyborg Mobile Cohort 8 2022, and a IT Assistant for SJDC.
        I make website components using ReactJS, Typescript, and other front-end tools.<br/>
        </Box>)
}
function projDesc(){
    return (
    <Box className='Proj-main'> 
        <div className="projects-header">Projects and Guides<br/></div>
            <Accordion className="Accordion">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                        <Typography gutterBottom variant="h5" className="Typo">2022- 2023 Projects</Typography>
                </AccordionSummary>
                <AccordionCard/>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                        <Typography gutterBottom variant="h5" className="Typo">2022-2023 Web Dev Guides</Typography>
                </AccordionSummary>
                <AccordionDetails className='Card-style'>
                    <Paper variant="outlined">
                        <img src={ReactImg} alt="ReactJS" width="90%"></img>
                        <br/> <Typography variant='caption' color="text.secondary">The following are links to the Web Dev Guides I have written for workshops</Typography>
                    </Paper>
                    <Button className="Typo" href="https://www.notion.so/Intro-to-ReactJS-Guide-Fall-2022-5978106126f94dfd8ea0597c47177816">2022 Intro to ReactJS Guide</Button>
                    <Button className="Typo" href="https://www.notion.so/CalBridge-Basic-Git-GitHub-Guide-Fall-2022-086521b3c9064624be04b2cfe39d5a2f">2022 Git & GitHub Basics</Button>
                    <Button className='Typo' href="https://toothsome-sheep-35d.notion.site/ReactJS-App-Deployment-to-GH-Pages-2023-3e5d202250c34128a404b28b597ab273">2023 ReactJS App Deployment guide to GH Pages</Button>
                    <Button className='Typo' href="https://toothsome-sheep-35d.notion.site/Intro-to-ReactJS-Hooks-Spring-2023-17112b1f79344d2491113ba9eca4b3e2">2023 ReactJS Intro to Hooks</Button>
                    <Button className='Typo' href="https://toothsome-sheep-35d.notion.site/Basic-HTML-CSS-rules-1b0e51051c7d44d4a1066f891183b8b4">2023 HTML/CSS Basics</Button>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography gutterBottom variant="h5" className="Typo">2018-2019 Projects</Typography>
                </AccordionSummary>
                <AccordionDetails className='Card-style'>
                        <CardCatScratch/>
                        <CardCatClicker/>
                </AccordionDetails>
            </Accordion>      
        </Box>)
}
function certDesc(){
    return(
    <Box className='Cert-main'> 
        <div className="Cert-header">Certifications<br/></div>
        <div className="Cert">
            <h2 className="Cert-Description">The following are some of the certifications I've earned so far:
            <ImageList className= 'Cert-items' cols={2} sx={{justify:"center"}} >
                {itemData.map((item) => (
                <ImageListItem key={item.img} >
                <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={item.title}
                    subtitle={<span>{item.date}</span>}
                    position="below"
                />
                </ImageListItem>
            ))}
            </ImageList>
            </h2>
      </div>
    </Box>);
}

const itemData = [
    {
      img: require('../assets/images/cert1.png'),
      title: 'Introduction to HTML Module',
      date: '2023',
    },
    {
        img: require('../assets/images/cert2.png'),
        title: 'Introduction to Responsive CSS Module',
        date: '2023',
    },
]

export default function ChangeText(prop) {
    if(prop === 'projDesc'){
        return (projDesc())
    } else if (prop === 'mainDesc'){
        return(mainDesc())
    } else if (prop === 'certsDesc'){
        return(certDesc())
    }
};
