const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	var dashboards = [
        { name: 'Kubernetes Dashboard', link: 'https://dashboard.example.com', info: 'This will show you kubnertes dashboard' },
        { name: 'Grafana Dashboard', link: 'https://grafana.example.com', info: 'This will show you grafana dashboards' }
    ];
  	res.render('index', {dashboards: dashboards});
})

app.listen(3000, function(req, res){
  console.log("Running on port 3000");  
});

