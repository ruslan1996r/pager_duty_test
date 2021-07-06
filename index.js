const express = require("express")
const Sentry = require("@sentry/node");
const app = express()
const PORT = 4000

Sentry.init({
  dsn: "https://bfe6d741f350446d9e1a9bce1c9248b8@o913167.ingest.sentry.io/5850773",
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

const controllers = {
  test: (req, res) => {
    res.send({ message: "test_123" })
  },
  error: (req, res) => {
    throw new Error('MY_NEW_TEST_ERROR_123')
    res.status(500).send({ error: "Err" })
  },
}

app.get(['/', '/test'], controllers.test)
app.get("/error", controllers.error)

app.use(function (err, req, res, next) {
  const error = {
    stack: err.stack,
    message: err.message
  }
  console.log("error", error)
  Sentry.captureException(error);

  res.status(500).send(error);
});

app.listen(PORT, () => console.log(`Server on: http://localhost:${PORT}`))