const express = require('express');
const router = express.Router();

const Report = require('../../models/Report');

// @route    POST api/reports
// @desc     Create a report
// @note     Future Extension
router.post('/', async (req, res) => {
  try {
    const newReport = new Report({
      id: req.body.id,
      type: req.body.type,
      state: req.body.state,
      message: req.body.message
    });

    const report = await newReport.save();

    res.json(report);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/reports
// @desc     Get all reports

router.get('/', async (req, res) => {
  try {
    const reports = await Report.find({ state: 'Open' });
    res.json({ reports });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PATCH api/reports/:reportId
// @desc     Update state of report
router.patch('/:rid', async (req, res) => {
  try {
    await Report.findOneAndUpdate(
      { id: req.params.rid },
      {
        $set: { state: 'Closed' }
      }
    );
    res.json({ msg: 'Report Resolved' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
