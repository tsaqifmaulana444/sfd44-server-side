import express from "express"
import { getMenus, getSpecMenu, deleteMenu, insertMenu, updateMenu } from "../db.js"


const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const result = await getMenus()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})

router.post("/", async (req, res) => {
    try {
        const result = await insertMenu(req.body.name, req.body.price, req.body.description, req.body.image, req.body.sale)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const result = await getSpecMenu(req.params.id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const result = await updateMenu(req.body.name, req.body.price, req.body.description, req.body.image, req.body.sale, req.params.id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const result = await deleteMenu(req.params.id)
        res.status(200).json({ message: `Data Successfully Deleted` })
    } catch (error) {
        console.log(error)
    }
})

export default router