const express = require("express");
const cors = require("cors");
const { chromium } = require("playwright");

const app = express();
app.use(cors());
app.use(express.json());

let browser;
let page;

// Launch Playwright browser
(async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: null });
  page = await context.newPage();

  await page.goto("https://india1xbet.mobi/en");
})();

// Click button endpoint
app.post("/click-button", async (req, res) => {
  try {
    await page.click("._container_18hiu_1 _ghost_18hiu_20 _medium_18hiu_38");
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Get round history endpoint

app.listen(5000, () => console.log("Playwright server running on port 5000"));
