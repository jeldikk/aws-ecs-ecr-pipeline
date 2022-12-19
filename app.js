const express = require("express");

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "This is a part of message",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "the server looks healthy",
  });
});

app.listen(PORT, () => console.log("Listening server on port ", PORT));
