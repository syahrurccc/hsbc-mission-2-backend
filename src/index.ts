import express from "express";
import morgan from "morgan";

import moviesRouter from "./routes/movies.route";
import movieRouter from "./routes/movie.route";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/error";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/movies", moviesRouter);
app.use("/movie", movieRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
