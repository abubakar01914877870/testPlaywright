const playwright = require('playwright');




(async () => {

        // code 
        const browser = await playwright['chromium'].launch({
            headless: false
        });

        //context 
        const context = await browser.newContext();

        //page 
            const page = await context.newPage();
            //navigate
            await page.goto('http://www.google.com');

            await browser.close();

})();