import test from "playwright/test";

const url="https://www.amazon.com/LUCKRACER-Footrest-Ergonomic-Adjustable-GTRACING/dp/B0C7BWXJZV/ref=sr_1_1_sspa?_encoding=UTF8&content-id=amzn1.sym.12129333-2117-4490-9c17-6d31baf0582a&dib=eyJ2IjoiMSJ9.sKNMB-JCQ3o4Cgylq0aL3R6xb--O7bPRscegvYC7X3pVuJJAhLKcp3AdVx35vnNxDfN3Q1v7ULVx-lELTJ8rcZPQqSKRINQURikT6dRIy1JDqj_ubxaeC8EcNL2fZqtggYN7ltJUHRGjmadrj4PJ6BEprbX1B6vhD4xHko_xKmaT-ZkW_ZbmcXjElUr8oFg7OgJxYPx0yD1AeETU4LG1bqQZ72IAGcpvKsLElalKNNlZWFWvYxlgY5m4u3KdS1jjKDR_0l5Mxnlacuk2YURtYJJ4blWFqipp0Lp_Hc4sxc0.IxFV9iOP0SXKvgPtIFQkKT3i8P16maoHMPOH8f9KAkk&dib_tag=se&keywords=gaming+chairs&pd_rd_r=ff28ead8-8061-417e-9d61-ca2880f9c0a1&pd_rd_w=S61Ch&pd_rd_wg=HZOdD&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=8N813K6TTQJ8GTRDK2H4&qid=1711517597&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1";

test("Amazon prize scamping ", async ({page})=>{

    await page.goto(url);
    const price= await page.$eval("","");
})