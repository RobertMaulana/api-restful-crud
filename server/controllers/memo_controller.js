const db = require('../models');

let newMemo = (req, res) => {
  res.render("new-memo");
}

let editMemo = (req, res) => {
  db.Memo
    .findOne(
      {where: {id: req.params.id}}
    )
    .then((result) => {
      // console.log(result);
      res.send(result)
      // res.render("edit-memo", {data: result})
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let createMemo = (req, res) => {
  db.Memo
    .create(req.body)
    .then((result) => {
      // res.redirect("/memo");
      res.send(result);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let dataMemo = (req, res) => {
  db.Memo
    .findAll()
    .then((result) => {
      // res.render("data-memo", {data: result})
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let updateMemo = (req, res) => {
  db.Memo
    .update(
      {judul_memo: req.body.judul_memo, isi_memo: req.body.isi_memo},
      {where: {id: req.body.id_memo}}
    )
    .then((result) => {
      db.Memo
        .findAll()
        .then((dataMemo) => {
          // res.redirect("/memo");
          res.send(dataMemo)
        })
        .catch((err) => {
          res.send(`Sepertinya ada masalah ketika ingin menampilkan data Memo`)
        })
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let removeMemo = (req, res) => {
  db.Memo
    .destroy(
      {where: {id: req.params.id}}
    )
    .then(() => {
      res.send("removed")
    })
    .catch((err) => {
      res.send(err.message)
    })
}

module.exports = {
  createMemo, newMemo, editMemo, dataMemo, updateMemo, removeMemo
}
