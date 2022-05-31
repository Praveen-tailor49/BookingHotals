import express  from "express"
import { createHotal, deleteHotal, getHotal, getHotals, updateHotal } from "../controllers/hotal.js";


const router = express.Router();

// CREATE
router.post('/', createHotal);

// UPDATE
router.post('/:id', updateHotal)

// DELETE
router.delete('/:id', deleteHotal)

// GET
router.get('/:id', getHotal )

// GET ALL
router.get('/', getHotals)
export default router