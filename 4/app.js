const express = require('express');
const multer = require('multer');
const tf = require('@tensorflow/tfjs-node');

const app = express();
const upload = multer({ dest: 'uploads/' });

let model;
(async () => {
  model = await tf.loadLayersModel('file://path/to/your/model.json');
})();

app.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    const image = fs.readFileSync(req.file.path);
    const tensor = tf.node.decodeImage(image, 3);
    const predictions = await model.predict(tensor.expandDims(0)).data();
    res.json(predictions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
