const Argos = require('../models/argos')

const getIndex = (req, res) =>{
    Argos.find((err, docs) =>{
        if(err) throw err
        res.json(docs)
    })
    
}

const postIndex = (req, res) =>{
    const {nom} = req.body

    argosSave = new Argos({nom})

    argosSave.save((err, docs) =>{
        if(err) console.log(err);
        res.json('nom ajouté')
    })
    
}

const DeleteIndex = (req, res) =>{
    const {id} = req.params
    Argos.findByIdAndDelete(id, (err, docs) =>{
        if(err) console.log(err);
        res.json('argo delete')
    })
}

const updateIndex = (req, res) =>{
    const {nom} = req.body
    const {id} = req.params

    Argos.findByIdAndUpdate(id, {nom}, (err, docs) =>{
        if(err) throw err
        res.json('argo update')
    })
}



module.exports = {
    getIndex: getIndex,
    postIndex: postIndex,
    DeleteIndex: DeleteIndex,
    updateIndex :updateIndex 
}