const express = require('express');
const router = express.Router();
const memoController = require("../controllers/memo_controller")

router.get("/new", memoController.newMemo);
router.get("/", memoController.dataMemo);
router.get("/edit/:id", memoController.editMemo);
router.post("/", memoController.createMemo);
router.post("/update", memoController.updateMemo);
router.get("/remove/:id", memoController.removeMemo);

module.exports = router
