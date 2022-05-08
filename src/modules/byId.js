const format = require('./format');

const byId = async (req, res, next) => {
    let document;
    try {
        check = isNaN(req.params.id);
        if (check === true) {document = await format.findOne({name: req.params.id})} 
        else {document = await format.findById(req.params.id)}
        
        if (document == null) {
            return res.status(404).json({ message: "Cannot find this id"});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.document = document;
    next();
}      

module.exports = byId;