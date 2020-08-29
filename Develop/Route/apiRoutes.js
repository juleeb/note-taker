const fs = require("fs");
const content = require("../db/db.json");

module.exports = function(app) {
    
    app.get('/api/notes', function(req, res) {
        res.json(content);
      });
    
    app.post('/api/notes', function(req, res) {
        let newContent = req.body;
        let newId = content.length
        newContent.id = newId;
        content.push(newContent);

        fs.writeFileSync("./db/db.json", JSON.stringify(content), function(err) {
            if (err) throw (err);
        });

        res.json("ok");
    });

    app.delete('/api/notes/:id', function(req, res) {
        let deleteContent = content.find(({id}) => id === JSON.parse(req.params.id));
        content.splice(content.indexOf(deleteContent), 1);
        fs.writeFile("./db/db.json", JSON.stringify(content), function(err) {
            if (err) throw (err);
            res.json("Note Deleted");
        });
    });
    
    }