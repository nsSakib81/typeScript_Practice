import test from "playwright/test";

test("calculate the video duration", async ({ page }) => {
    const url = "https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD";

    await page.goto(url);
    const videos = page.locator('//*[@id="time-status"]');
    console.log(videos.count);
})