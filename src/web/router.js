const express = require('express');
const router = express.Router();
const routes = require('./routes');


/*
    Register a route handler for every handler in routes.js
    Every entry has URL as key and the route handling object as value
*/
for (let [url, route] of Object.entries(routes)) {
    router.get(url, (req, res) => {
        res.render(route.customHandler || 'index', { // If custom handler defined, use that instead of default 'index' handler
            curPage: route, // Pass through the current page so that we can set the active class cleanly
            page: require(`./data/${route.fileName}.json`), // The main page data
            routes: routes // So that we can automatically generate the navbar, make the routes accessible
        });
    });
}

router.use('/static', express.static('src/web/static'));

module.exports = router;