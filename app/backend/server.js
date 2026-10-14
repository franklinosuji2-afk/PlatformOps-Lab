const express = require("express")
const client = require("prom-client")

const app = express()

// Default Node.js process metrics (CPU, memory, event loop lag, GC).
client.collectDefaultMetrics()

const httpRequests = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP requests handled by the API",
  labelNames: ["method", "route", "status"],
})

const httpDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "HTTP request duration in seconds",
  labelNames: ["method", "route", "status"],
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1],
})

app.use((req, res, next) => {
  const stop = httpDuration.startTimer()
  res.on("finish", () => {
    const route = req.route ? req.route.path : "unmatched"
    const labels = { method: req.method, route, status: res.statusCode }
    httpRequests.inc(labels)
    stop(labels)
  })
  next()
})

app.get("/", (req, res) => {
  res.json({
    project: "PlatformOps Lab",
    status: "Healthy",
    version: "1.0.0",
  })
})

app.get("/health", (req, res) => {
  res.json({ status: "UP" })
})

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType)
  res.end(await client.register.metrics())
})

app.listen(3000, () => {
  console.log(JSON.stringify({ level: "info", msg: "api listening", port: 3000 }))
})
