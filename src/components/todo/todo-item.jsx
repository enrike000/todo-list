import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export const TodoItem = ({ title, description }) => {
  return (
    <>
      <Box>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
