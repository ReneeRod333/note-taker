const express = require('express');
const apiRoutes = require('./routes/api-routes')
const viewRoutes = require('./routes/view-routes')
const port = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(viewRoutes)
app.use(apiRoutes)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});