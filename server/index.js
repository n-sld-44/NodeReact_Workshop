"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const LearningPackage_js_1 = require("./Classes/LearningPackage.js");
const { swaggerDocs, swaggerUi } = require('./swagger.js');
//Database
const learningPackages = [
    new LearningPackage_js_1.LearningPackage(1, 'Introduction to TypeScript'),
    new LearningPackage_js_1.LearningPackage(2, 'Introduction to Angular'),
    new LearningPackage_js_1.LearningPackage(3, 'Introduction to React'),
    new LearningPackage_js_1.LearningPackage(4, 'Introduction to Vue'),
];
//Express
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/**
 * @openapi
 * /api/liveness:
 *   get:
 *     description: Liveness check
 *     responses:
 *       '200':
 *         description: I am alive
 */
app.get('/api/liveness', (req, res) => {
    console.log('Liveness check');
    res.send('I am alive');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
/**
 * @openapi
 * /api/package:
 *   get:
 *     description: Get all learning packages
 *     responses:
 *       '200':
 *         description: A successful response
 *
 */
app.get('/api/package', (req, res) => {
    res.json(learningPackages);
});
//get learning package by id
/**
 * @openapi
 * /api/package/{id}:
 *    get:
 *     description: Get learning package by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Learning package id
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Learning package not found
 */
app.get('/api/package/:id', (req, res) => {
    const { id } = req.params;
    const learningPackage = learningPackages.find((lp) => lp.id == parseInt(id));
    if (learningPackage) {
        res.send(learningPackage);
    }
    else {
        res.status(404).send('Learning package not found');
    }
});
// Openapi docs Post /api/package
/**
 * @openapi
 * /api/package:
 *   post:
 *     description: Create learning package
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *             required:
 *               - id
 *               - name
 *     responses:
 *       '200':
 *         description: Learning package created
 */
app.post('/api/package', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const learningPackage = new LearningPackage_js_1.LearningPackage(id, name);
    learningPackages.push(learningPackage);
    res.status(200).json(learningPackage);
});
// Openapi docs Put /api/package
/**
 * @openapi
 * /api/package:
 *   put:
 *     description: Update learning package
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *             required:
 *               - id
 *               - name
 *     responses:
 *       '200':
 *         description: Learning package updated
 *       '404':
 *         description: Learning package not found
 */
app.put('/api/package', (req, res) => {
    const { id, name } = req.body;
    const learningPackage = learningPackages.find((lp) => lp.id === parseInt(id));
    if (learningPackage) {
        learningPackage.name = name;
        res.status(200).json(learningPackage);
    }
    else {
        res.status(404).send('Learning package not found');
    }
});
// Openapi docs Get /api/package-summaries
/**
 * @openapi
 * /api/package-summaries:
 *   get:
 *     description: Get all learning package summaries
 *     responses:
 *       '200':
 *         description: A successful response
 *
 */
app.get('/api/package-summaries', (req, res) => {
    try {
        const summaries = learningPackages.map(pkg => ({ id: pkg.id, title: pkg.name }));
        res.status(200).json(summaries);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
// Declare a route GET “/api/packagesummaries/search?title=..&description=..&tag=..”
//Openapi docs Get /api/package-summaries/search
/**
 * @openapi
 * /api/package-summaries/search:
 *   get:
 *     description: Get all learning package summaries
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         description: Learning package id
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Learning package title
 *     responses:
 *       '200':
 *         description: A successful response
 *
 */
app.get('/api/package-summaries/search', (req, res) => {
    try {
        const { id, title } = req.query;
        const filteredPackages = learningPackages.filter(pkg => {
            return (id ? pkg.id.toString() === id : true) &&
                (title ? pkg.name.includes(title) : true);
        });
        res.status(200).json(filteredPackages);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
//Delete /api/package/:id
/**
 * @openapi
 * /api/package/{id}:
 *    delete:
 *     description: Delete learning package by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Learning package id
 *     responses:
 *       '200':
 *         description: Learning package deleted
 *       '404':
 *         description: Learning package not found
 */
app.delete('/api/package/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = learningPackages.findIndex((lp) => lp.id === id);
    if (index !== -1) {
        learningPackages.splice(index, 1);
        res.status(200).send('Learning package deleted');
    }
    else {
        res.status(404).send('Learning package not found');
    }
});
