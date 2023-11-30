//importamos el modelo
import BlogModel from '../models/BlogModel.js';
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();
/*Metodo CRUD*/

//Mostrar todos fotos
export const getAllProducros = async (req, res) => {
  try {
    const prdoctos = await BlogModel.findAll();
    prdoctos.map((img) => {
      fs.writeFileSync(
        path.join(__dirname, 'dbimages/' + img.idProd + '.png'),
        img.imageProd
      );
    });
    const imagedir = fs.readdirSync(path.join(__dirname, 'dbimages/'));

    res.json(imagedir);
    console.log(imagedir);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar todos los datos
export const getAllProducrosf = async (req, res) => {
  try {
    const prdoctos = await BlogModel.findAll();
    res.json(prdoctos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//mostrar solo uno
export const getProducto = async (req, res) => {
  try {
    const prod = await BlogModel.findAll({
      where: {
        idProd: req.params.idProd,
      },
    });
    res.json(prod[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//crear
export const createProducto = async (req, res) => {
  const { body, file } = req;
  if (file) {
    //let url = `http://localhost:8000/images/${file.filename}`;
    const data = fs.readFileSync(
      path.join(__dirname, 'images/' + req.file.filename)
    );
    try {
      console.log(file);
      console.log(req.body);
      console.log(data);
      await BlogModel.create({
        nombreProd: req.body.nombreProd,
        descripcionProd: req.body.descripcionProd,
        precioProd: req.body.precioProd,
        imageProd: data,
      });
      res.json({
        message: 'Registro creado',
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  }
};

//actualizar
export const updateProducto = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: { idProd: req.params.idProd },
    });
    res.json({
      message: 'Registro actualizado',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//eliminar
export const deleteProdcuto = async (req, res) => {
  try {
    await BlogModel.destroy({
      where: { idProd: req.params.idProd },
    });
    fs.unlinkSync(
      path.join(__dirname, 'dbimages/' + req.params.idProd + '.png')
    );
    res.json({
      message: 'Registro eliminado',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
