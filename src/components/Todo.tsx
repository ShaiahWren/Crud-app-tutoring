import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";

interface ITodoProps {
  name: string;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const FunctionalTodo: React.FC<ITodoProps> = (props) => {
  const [isFinished, setIsFinished] = React.useState<boolean>(false);
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body2" component="p">
            {isFinished ? <del>{props.name}</del> : props.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => setIsFinished(!isFinished)} size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};
