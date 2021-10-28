const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())
var access_token = "";
const port = process.env.PORT || 2400;
app.listen(port, () => console.log('App listening on port ' + port));
const axios = require('axios')
const clientD = '630c7adc853bc773cbbf'
const clientS = 'cd50eda7c7f8f0b7ce6867b304c8dd29894eae84'
app.post('/github', (req, res) => {
    console.log("req", req.body.token);

    const requestToken = req.body.token;

    axios({
        method: 'post',
        url: `https://github.com/login/oauth/access_token?client_id=${clientD}&client_secret=${clientS}&code=${requestToken}`,

        headers: {
            accept: 'application/json'
        }
    }).then((response) => {
        access_token = response.data.access_token;
        console.log("1st", response);
        res.status(200).json({ token: access_token })
    })
        .catch((error) => { console.log("1st", error) })

})


