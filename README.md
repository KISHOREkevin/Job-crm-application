# Food Delivery Application Project with user Authentication


https://github.com/KISHOREkevin/Job-crm-application/assets/98908744/d612f988-9df2-4790-b4a0-3917c8759505



https://github.com/KISHOREkevin/Job-crm-application/assets/98908744/ab9b2f4b-5a67-4a9c-8e15-09a12f27c3c2



https://github.com/KISHOREkevin/Job-crm-application/assets/98908744/5ba8040a-f82a-4906-9f1f-fa3b87cf7d61



* Career Cart is the Job management Application which it has functions such as 
    * Companies managemant,
    * User management , 
    * User Authentication , 
    * applications management.
    * automatic mailing feature
    * mobile first application
* hence this application comes under the category of CRM application (Customer Relationship Management)
* With Career Cart, you can post the jobs, apply for the jobs , applications can be managed....
* Career cart app is easy to use, powerful to manage the business related job management and tracking.
* Try Career cart app today and see the difference it can make .

# Technologies used
* NodeJS ( server environment)
* ExpressJS ( routing and middleware integration)
* Bcrypt ( password encryption and authentication)
* Multer (file management in servers)
* MongoDB (database)
* Mongoose ( ORM )
* Dotenv ( env )
* Cors ( permiting the cross origin policy)
* Cloudinary ( assets handling cloud platform)
* Nodemailer ( mailing functionalities)
* postman ( Api testing)
* ReactJS ( UI framework)
* Vite ( Hot Module Replacement )
* Tailwind Css (styling framework)
* React router dom ( route management )
* React hot toast ( toast messages)
* Docker and Docker-Compose (Shipment)
  
# Project Usage (online)
* First go to backend api link to start the api (its deployed in render.com free tier , hence it will spun down after inactive of 15 seconds)
  * https://job-crm-application.onrender.com/

* After loading the api then go to project link
    * https://fastidious-semolina-612170.netlify.app/

# Project Usage (offline)
* Create an account in **Cloudinary , Mongodb atlas**
* Install **Docker and docker-compose** on you system 
* clone the repository `git clone https://github.com/KISHOREkevin/Job-crm-application.git`
* `cd Job-crm-application`
* inside server folder and client folder create `.env` file
* in `server folder` ,enter the following code in the `.env` file :
     * `MONGO_URL=Your-mongodb-url`
     * `PORT=Your-port-number`
     * `SALT_ROUNDS=10`
     * `GMAIL_ACCOUNT=your-mail-id`
     * `GMAIL_ACCOUNT_PASSWORD=your-mail-password` (Generated from google developer tool)
     * `CLOUD_NAME=Your-cloudinary-cloud-name`
     * `CLOUD_API_KEY=Your-cloudinary-api-key`
     * `CLOUD_API_SECRET=Your-cloudinary-api-secret`
       
* In `client folder` , enter the following code in the `.env` file:
     * `VITE_BACKEND_URL=http://localhost:3000/api`
* get backward where the `docker-compose.yml` file is located.
* then run the command `docker-compose up`.
* then go to `http://localhost:5173/` and access the application.


