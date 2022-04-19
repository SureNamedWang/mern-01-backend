const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { ErrorHandler } = require("./middleware/errorMiddleware");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/techs", require("./routes/techs"));

app.use(ErrorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
