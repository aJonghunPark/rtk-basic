import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchAllAsync, selectUser } from "../features/user/userSlice";

const UserPage = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllAsync());
  }, [dispatch]);
  return (
    <Container component="main" maxWidth="xl">
      <Grid container spacing={2}>
        {user.status === "complete" &&
          user.users.map((user) => (
            <Grid item xs key={user.id}>
              <Card sx={{ width: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "green" }} aria-label="user">
                      {user.name.slice(0, 1)}
                    </Avatar>
                  }
                  title={user.name}
                  subheader={user.username}
                />
                <CardContent>
                  <Typography variant="h6" align="left">
                    {user.company.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Address: {user.address.street} {user.address.suite}{" "}
                    {user.address.city} {user.address.zipcode}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Phone: {user.phone}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    website: {user.website}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      {user.status === "loading" && <div>Loading...</div>}
      {user.status === "failed" && <div>API Error!!!</div>}
    </Container>
  );
};

export default UserPage;
