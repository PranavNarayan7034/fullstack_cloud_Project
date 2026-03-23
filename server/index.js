import express from 'express'
import cors from 'cors'

const app = express()

// Middleware : a fn tha execute before backend load
app.use(express.json())      // convert json content that can read backend Node.js
app.use(cors({
    origin: 'http://localhost:5173'
}))


app.post('/api/payment', (req, res) => {
    // console.log("Payment required in backend")
    // res.send("api/payment route called")
    // console.log("reqbody ===" , req.body)

    try {
        const { cardName, cardNumber, expiry, cvc, payment } = req.body;
        
        res.status(200).json({
            message: "Payment Processed Successfully",
            success:true
        })
    } catch (error) {
        console.log("Error in payment Processing Backend :", error)
        res.status(500).json({
            error: `Payment failed : ${error}`
        })
    }
    
})


const PORT = 5000
app.listen(PORT, () => {
    console.log(`Backend running on : http://localhost:${PORT}`)
})