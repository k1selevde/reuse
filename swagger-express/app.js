const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const PORT = process.env.PORT || 5000;

const app = express()


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'My public API',
            version: '1.0.0'
        }
    },
    apis: ['app.js'],
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))





/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Successful
 *
 *
 */
app.get('/books', (req,res) => {
    res.send([
        {
            id: 1,
            title: 'Poter 2'
        }
    ])
})




/**
 * @swagger
 * /books:
 *   post:
 *     description: Create a new book
 *     parameters:
 *     - name: title
 *       description: title of the book
 *       in: formData
 *       required: true
 *       type: string
 *     responses:
 *       201:
 *         description: Created
 */
app.post('/books', (req,res) => {
    res.status(201).send('ok')
})



app.listen(PORT, () => { `Server has been started on ${PORT} port`})