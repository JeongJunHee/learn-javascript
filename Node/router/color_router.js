const express = require('express');
const router = express.Router();
const colors = require('../model/color');

router.get('/colors', getColorList);
router.get('/colors/:color', getColorDetail);
router.post('/colors', addColor);

module.exports = router;

function getColorList(req, res) {
  const colorList = colors.getColorList();
  const result = { total: colorList.length, data: colorList };
  res.send(result);
}

async function getColorDetail(req, res) {
  try {
    const color = req.params.color;
    const result = await colors.getColorDetail(color);
    res.send(result);
  } catch (e) {
    res.send(e);
  }
}

async function addColor(req, res) {
  const color = req.body.color;
  const value = req.body.value;
  
  if (!color) {
    res.send({ msg: 'error' });
    return;
  }

  try {
    const result = await colors.addColor(color, value);
    res.send({ msg: 'success', data: result });
  }
  catch (e) {
    res.send(e);
  }
}