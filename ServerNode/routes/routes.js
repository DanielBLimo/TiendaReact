import express from 'express';
import multer from 'multer';
import {
  createProducto,
  deleteProdcuto,
  getAllProducrosf,
  getProducto,
  getAllProducros,
  updateProducto,
} from '../controllers/BlogController.js';

import storage from '../config/multer.js';

const uplades = multer({ storage });

const router = express.Router();

router.get('/fotos', getAllProducros); //con fotos
router.get('/', getAllProducrosf); //sin fotos
router.get('/:idProd', getProducto);
router.post('/', uplades.single('file'), createProducto);
router.put('/:idProd', updateProducto);
router.delete('/:idProd', deleteProdcuto);

export default router;
