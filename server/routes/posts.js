//Creamos las rutas que utilizara nuestra app

import express from 'express';

import { getPosts, getPostsBySearch, createPost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

//Los handlers estan declarados en la carpeta de controllers para tener mas limpieza y ver las rutas

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.post('/', auth, createPost);
router.delete('/:id', auth, deletePost);

export default router;