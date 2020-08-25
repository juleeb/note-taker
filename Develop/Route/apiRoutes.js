const fs = require("fs");
const content = require("../db/db.json");

module.exports = function(app) {
    
    app.get('/api/notes', function(req, res) {
        res.json(JSON.stringify(content));
      });

    app.post('/api/notes', function(req, res) {
        let newContent = req.body;
        let newId = (data.length).toString();
        newContent.id = newId;
        data.push(newContent);

        fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
            if (err) throw (err);
        });

        res.json(data);
    });

    
    
    }