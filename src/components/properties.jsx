import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { Favorite, LocationOn, PersonOutline } from '@mui/icons-material';

export const Properties = (props) => {
  return (
    <div id="properties" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Properties</h2>
          {/* <p>
            Ninety percent of all millionaires become so through owning real
            estate.
          </p> */}
        </div>
        <div className="row">
          <div className="properties-items">
            <div className="row w-100">
              <div className="col-lg-4 margin-top">
                <Box sx={{ backgroundColor: 'white', borderRadius: 2, position: 'absolute', top: 30, left: 0, zIndex: 99999, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', px: 8, py: 2, }}>
                    <Typography sx={{ mr: 2 }} color="black" fontWeight={"600"} variant="h4" component="div">
                      Rented
                    </Typography>
                    <PersonOutline sx={{ fontSize: 30, color: 'lightGreen' }} />
                  </Box>
                </Box>
                <Card sx={{ maxWidth: '100%', borderRadius: 3, position: 'relative', marginLeft: 4, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }}>
                  <Box sx={{ backgroundColor: 'white', borderRadius: 25, position: 'absolute', top: 10, right: 10 }}>
                    <Favorite sx={{ fontSize: 30, color: 'red', margin: 1 }} />
                  </Box>

                  <CardMedia
                    component="img"
                    height="250"
                    image={'img/localimagereader.jpeg'}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography textAlign={"start"} fontWeight={"600"} variant="h4" component="div">
                      1 bedroom in Riyadh
                    </Typography>
                    <Grid container>
                      <Grid lg={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', my: '20px' }}>
                        <LocationOn sx={{ fontSize: 25, color: 'gray', mr: '10px' }} />
                        <Typography color="gray" textAlign={"start"} fontWeight={"500"} variant="h5" component="div">
                          Olaya
                        </Typography>
                      </Grid>
                      <Grid lg={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ height: '7px', borderRadius: '5px', width: '100px', overflow: 'hidden', mr: '10px', border: '0.5px solid gray' }} >
                          <Box sx={{ width: '45%', height: '100%', backgroundColor: 'lightgreen', borderRadius: '5px' }} />
                        </Box>
                        <Typography whiteSpace="nowrap" textAlign={"start"} fontWeight={"700"} variant="h5" component="div">
                          45% Sold
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div>
                          <Typography textAlign={"center"} fontWeight={"700"} variant="h4" component="div">
                            8%
                          </Typography>
                          <Typography fontWeight={"500"} fontSize={16} component="div">
                            Gross Yield
                          </Typography>
                        </div>
                      </Grid>
                      <Grid lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography textAlign={"center"} fontWeight={"700"} variant="h4" component="div">
                          25%
                        </Typography>
                        <Typography fontWeight={"500"} fontSize={16} component="div" whiteSpace="nowrap">
                          Capital
                        </Typography>
                      </Grid>
                      <Grid lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Typography textAlign={"center"} fontWeight={"700"} variant="h4" component="div">
                          47%
                        </Typography>
                        <Typography fontWeight={"500"} fontSize={16} component="div">
                          Total ROI
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
              <div className="col-lg-4 margin-top">
                <Box sx={{ backgroundColor: 'white', borderRadius: 2, position: 'absolute', top: 30, left: 0, zIndex: 99999, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', px: 8, py: 2, }}>
                    <Typography sx={{ mr: 2 }} color="black" fontWeight={"600"} variant="h4" component="div">
                      Rented
                    </Typography>
                    <PersonOutline sx={{ fontSize: 30, color: 'lightGreen' }} />
                  </Box>
                </Box>
                <Card sx={{ maxWidth: '100%', borderRadius: 3, position: 'relative', marginLeft: 4, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }}>
                  <Box sx={{ backgroundColor: 'white', borderRadius: 25, position: 'absolute', top: 10, right: 10 }}>
                    <Favorite sx={{ fontSize: 30, color: 'red', margin: 1 }} />
                  </Box>

                  <CardMedia
                    component="img"
                    height="250"
                    image={'img/origin.jpeg'}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography textAlign={"start"} fontWeight={"600"} variant="h4" component="div">
                      1 bedroom in Dammam
                    </Typography>
                    <Grid container>
                      <Grid lg={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', my: '20px' }}>
                        <LocationOn sx={{ fontSize: 25, color: 'gray', mr: '10px' }} />
                        <Typography color="gray" textAlign={"start"} fontWeight={"500"} variant="h5" component="div">
                          Half Moon
                        </Typography>
                      </Grid>
                      <Grid lg={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ height: '7px', borderRadius: '5px', width: '100px', overflow: 'hidden', mr: '10px', border: '0.5px solid gray' }} >
                          <Box sx={{ width: '65%', height: '100%', backgroundColor: 'lightgreen', borderRadius: '5px' }} />
                        </Box>
                        <Typography whiteSpace="nowrap" textAlign={"start"} fontWeight={"700"} variant="h5" component="div">
                          65% Sold
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div>
                          <Typography textAlign={"center"} fontWeight={"700"} variant="h4" component="div">
                            16%
                          </Typography>
                          <Typography fontWeight={"500"} fontSize={16} component="div">
                            Gross Yield
                          </Typography>
                        </div>
                      </Grid>
                      <Grid lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography textAlign={"center"} fontWeight={"700"} variant="h4" component="div">
                          38%
                        </Typography>
                        <Typography fontWeight={"500"} fontSize={16} component="div" whiteSpace="nowrap">
                          Capital
                        </Typography>
                      </Grid>
                      <Grid lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Typography textAlign={"center"} fontWeight={"700"} variant="h4" component="div">
                          60%
                        </Typography>
                        <Typography fontWeight={"500"} fontSize={16} component="div">
                          Total ROI
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
              <div className="col-lg-4 margin-top">
                <Box sx={{ backgroundColor: 'white', borderRadius: 2, position: 'absolute', top: 30, left: 0, zIndex: 99999, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', px: 8, py: 2, }}>
                    <Typography sx={{ mr: 2 }} color="black" fontWeight={"600"} variant="h4" component="div">
                      Rented
                    </Typography>
                    <PersonOutline sx={{ fontSize: 30, color: 'lightGreen' }} />
                  </Box>
                </Box>
                <Card sx={{ maxWidth: '100%', borderRadius: 3, position: 'relative', marginLeft: 4, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }}>
                  <Box sx={{ backgroundColor: 'white', borderRadius: 25, position: 'absolute', top: 10, right: 10 }}>
                    <Favorite sx={{ fontSize: 30, color: 'red', margin: 1 }} />
                  </Box>

                  <CardMedia
                    component="img"
                    height="250"
                    image={'img/607ed52504f99.webp'}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography textAlign={"start"} fontWeight={"600"} variant="h4" component="div">
                      1 bedroom in Abha
                    </Typography>
                    <Grid container>
                      <Grid lg={6}  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', my: '20px' }}>
                        <LocationOn sx={{ fontSize: 25, color: 'gray', mr: '10px' }} />
                        <Typography color="gray" textAlign={"start"} fontWeight={"500"} variant="h5" component="div">
                          Al Marooj
                        </Typography>
                      </Grid>
                      <Grid lg={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ height: '7px', borderRadius: '5px', width: '100px', overflow: 'hidden', mr: '10px', border: '0.5px solid gray' }} >
                          <Box sx={{ width: '90%', height: '100%', backgroundColor: 'lightgreen', borderRadius: '5px' }} />
                        </Box>
                        <Typography whiteSpace="nowrap" textAlign={"start"} fontWeight={"700"} variant="h5" component="div">
                          90% Sold
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div>
                          <Typography textAlign={"center"} fontWeight={"700"} variant="h4" component="div">
                            25%
                          </Typography>
                          <Typography fontWeight={"500"} fontSize={16} component="div">
                            Gross Yield
                          </Typography>
                        </div>
                      </Grid>
                      <Grid lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography textAlign={"center"} fontWeight={"700"} variant="h4" component="div">
                          47%
                        </Typography>
                        <Typography fontWeight={"500"} fontSize={16} component="div" whiteSpace="nowrap">
                          Capital
                        </Typography>
                      </Grid>
                      <Grid lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Typography textAlign={"center"} fontWeight={"700"} variant="h4" component="div">
                          72%
                        </Typography>
                        <Typography fontWeight={"500"} fontSize={16} component="div">
                          Total ROI
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'} */}
          </div>
        </div>
      </div>
    </div>
  );
};