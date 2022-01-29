const express = require("express");
const router = express.Router();
const { cityController, cityListController } = require("./controllers/city_controller");
/**
 * @swagger
 * /api/city?c=city:
 *   get:
 *     summary: Retrieve fake weather data for a city
 *     description: Retrieve  fake weather data for a city. This is a fake API. It returns a random number between 0 and 100. Please do not use this API for real world purposes.
 *     query:
 *       name: c
 *       type: string
 *       required: true
 *     responses:
 *       200:
 *         description: Object containing the city and the weather data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                city:
 *                 type: string
 *                 example: "New York"
 *                temp_c:
 *                 type: number
 *                 example: "50"
 *                temp_f:
 *                 type: number
 *                 example: "122"
 *                humidity:
 *                 type: number
 *                 example: "23"
 *                wind:
 *                 type: number
 *                 example: "2"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                 type: string
 *                 example: "Please provide a city name"
 *
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                 type: string
 *                 example: "Internal server error"
*/
router.get("/city", cityController)
/**
 * @swagger
 * /api/search?q=city:
 *   get:
 *     summary: Retrieve list of fake weather data for a given query
 *     description: Retrieve list of fake weather data for a given query This is a fake API. It returns a random number between 0 and 100. Please do not use this API for real world purposes.
 *     query:
 *       name: q
 *       type: string
 *       required: true
 *     responses:
 *       200:
 *         description: List containing the city and the weather data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 *                city:
 *                 type: string
 *                 example: "New York"
 *                temp_c:
 *                 type: number
 *                 example: "50"
 *                temp_f:
 *                 type: number
 *                 example: "122"
 *                humidity:
 *                 type: number
 *                 example: "23"
 *                wind:
 *                 type: number
 *                 example: "2"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                 type: string
 *                 example: "Please provide a city name"
 *
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                 type: string
 *                 example: "Internal server error"
*/
router.get("/city/search", cityListController)
module.exports = router;