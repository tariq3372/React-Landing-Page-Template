import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Properties</h2>
          <p>
            Ninety percent of all millionaires become so through owning real
            estate.
          </p>
        </div>
        <div className="row">
          {/* <div className="portfolio-items"> */}
          <div className="row w-100">
            <div className="col-lg-4 bg-success">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image='../about.jpg'
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
            <div className="col-lg-4 bg-danger">
              <label>2</label>
            </div>
            <div className="col-lg-4 bg-primary">
              <label>3</label>
              <Typography>hello</Typography>
            </div>
          </div>
          {/* {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'} */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
