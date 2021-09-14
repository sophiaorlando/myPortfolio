import React, { useEffect, useState } from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  desc: {
    // fontWeight: 200,
    color: "black",
  },
});

function Menu({ projectItem }) {
  const classes = useStyles();
  return (
    <Fade bottom big cascade>
      <div className="menu">
        {projectItem.map((item) => {
          return (
            <Link
              to={{ pathname: `/projects/${item.id}`, state: { item } }}
              className="link"
            >
              <Card className={classes.root} key={item.id} className="theCard">
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.menuImage}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.desc}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="black"
                    className="showMeBtn"
                    onClick={() => window.open(item.projLive)}
                  >
                    Live Demo
                  </Button>
                  <Link
                    to={{ pathname: `/projects/${item.id}`, state: { item } }}
                    className="link"
                  >
                    <Button size="small" color="black" className="showMeBtn">
                      Show me the Code!
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Link>
          );
        })}
      </div>
    </Fade>
  );
}

export default Menu;

////

//return

{
  /* <div className="border-box">
<Link
  to={{ pathname: `/projects/${item.id}`, state: { item } }}
  className="link"
  // onClick={() => console.log(item)}
>
  <h2>{item.title}</h2>
</Link>
<img className="itemImage" src={item.image} alt="" />

<p>{item.description}</p> */
}
