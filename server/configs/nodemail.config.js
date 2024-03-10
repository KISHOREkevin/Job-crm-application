import nodemailer from "nodemailer";
import "dotenv/config"
let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.GMAIL_ACCOUNT,
        pass:process.env.GMAIL_ACCOUNT_PASSWORD
    }
})

export default transporter;