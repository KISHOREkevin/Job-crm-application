import transporter from "../configs/nodemail.config.js";

let sendCheckingStatus = async (req,res)=>{
    let {fromemailid,toemailid} = req.query;

    try {
        let response = await transporter.sendMail({
            from:fromemailid+" <donotreply@bar.com>",
            to:toemailid,
            subject:"Our company checking your profile !!!!",
            html:"<h3>Our company has checking your profile now </h3><br><p>be confident your profile would br captured ...</p>"
        })
        if(!response){
            return res.status(404).json({message:"No mail sent ..."});
        }
        return res.status(200).json({message:response.response});
    } catch (error) {
        console.log(error);
    }
}

let sendApprovedStatus = async (req,res)=>{
    let {fromemailid,toemailid} = req.query;

    try {
        let response = await transporter.sendMail({
            from:fromemailid+" <donotreply@bar.com>",
            to:toemailid,
            subject:"Our company Approved your profile !!!!",
            html:"<h3>Congrats fresher !!! </h3><br><p>Our Company approved your job request !!!!</p>"
        })
        if(!response){
            return res.status(404).json({message:"No mail sent ..."});
        }
        return res.status(200).json({message:response.response});
    } catch (error) {
        console.log(error);
    }
}

let sendRejectedStatus = async (req,res)=>{
    let {fromemailid,toemailid} = req.query;

    try {
        let response = await transporter.sendMail({
            from:fromemailid+" <donotreply@bar.com>",
            to:toemailid,
            subject:"Our company rejected your profile !!!!",
            html:"<h3> You have not qualified in our company !!! </h3><br><p>While we understand that this may be disappointing news , please know that the competition was fierce and the evaluation process was meticulous ...</p>"
        })
        if(!response){
            return res.status(404).json({message:"No mail sent ..."});
        }
        return res.status(200).json({message:response.response});
    } catch (error) {
        console.log(error);
    }
}


export {sendCheckingStatus,sendApprovedStatus,sendRejectedStatus}