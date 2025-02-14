import { useState, useEffect } from "react";
import {
    Typography,
    CircularProgress,
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material";

export default function Explore() {
    const [loading, setLoading] = useState(false);
    const [podcasts, setPodcast] = useState([]);
    const data = [
        {
            podcastName: "The things we do",
            creator: "mrbeast",
            image: "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg",
        },
        {
            podcastName: "Woman lit in red",
            creator: "Ron Lach",
            image: "https://avatars.githubusercontent.com/u/29051615?v=4",
        },
        {
            podcastName: "The greates Podcast",
            creator: "Jhon Smith",
            image: "https://avatars.githubusercontent.com/u/16567195?v=4",
        },
        {
            podcastName: "7Seven Minutes",
            creator: "Logan Paul",
            image:
                "https://media.vanityfair.com/photos/5a4bda912d48cc419d39410d/2:3/w_686,h_1029,c_limit/Logan-Paul-Worrisome.jpg",
        },
        {
            podcastName: "2 The things we do",
            creator: "mrbeast",
            image: "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg",
        },

        {
            podcastName: "2 Woman lit in red",
            creator: "Ron Lach",
            image: "https://avatars.githubusercontent.com/u/29051615?v=4",
        },
        {
            podcastName: "3 The greates Podcast",
            creator: "Jhon Smith",
            image: "https://avatars.githubusercontent.com/u/16567195?v=4",
        },
        {
            podcastName: "9Seven Minutes",
            creator: "Logan Paul",
            image:
                "https://media.vanityfair.com/photos/5a4bda912d48cc419d39410d/2:3/w_686,h_1029,c_limit/Logan-Paul-Worrisome.jpg",
        },
    ];

    useEffect(() => {
        setLoading(true);
        setPodcast(data);
        setLoading(false);
    }, [loading]);

    return (
        <div style={{ minHeight: "60vh", padding: "6rem" }}>
            {loading ? (
                <div style={{ textAlign: "center", paddingTop: "3rem" }}>
                    <CircularProgress style={{ width: "6rem", height: "6rem" }} />
                </div>
            ) : (
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {podcasts.length ? (
                            podcasts.map((podcast, index) => (
                                <Grid item md={3} key={index}>
                                    <Card
                                        onClick={() => details(podcast)}
                                        style={{ background: "#000000" }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={podcast.image}
                                            alt="Profile"
                                            style={{ height: "350px", borderRadius: "22px" }}
                                        />
                                        <CardContent>
                                            <Typography
                                                fontSize="20px"
                                                style={{ fontWeight: "600", lineHeight: "30px" }}
                                                color="#ffffff"
                                            >
                                                {podcast.podcastName}
                                            </Typography>
                                            <Typography
                                                fontSize="15px"
                                                color="#ffffff"
                                                style={{ fontWeight: "300", lineHeight: "30px" }}
                                            >
                                                {podcast.creator}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            <h2>No podcasts Yet...</h2>
                        )}
                    </Grid>
                </Box>
            )}
        </div>
    );
}
