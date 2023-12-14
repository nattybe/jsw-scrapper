import puppeteer from 'puppeteer';
async function getSomeThing() {
    const browser = await puppeteer.launch({
      headles: false,
      defaultViewport: null,
    });
    const page=await browser.newPage();
    await page.goto("https://www.google.com/");
    await page.screenshot({ path: "screenshot.png" });

    // Close the browser
    await browser.close();

    console.log("Puppeteer test completed!");

}
await getSomeThing();