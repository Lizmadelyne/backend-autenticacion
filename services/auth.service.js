
    const boom = require("@hapi/boom");
    const bcrypt = require("bcrypt");
    const jwt = require('jsonwebtoken');
    const UserService = require("../services/user.service");
    const service = new UserService();
    const nodemailer = require("nodemailer")

    const { config } = require('../config/config')

    class AuthService {
   
      async getUser(email, password) {
        const user = await service.findByEmail(email);
        if (!user) {
          throw boom.unauthorized();
        }
        const isMatch = await bcrypt.compare(password, user.password);
    
        if (!isMatch) {
          throw boom.unauthorized();
        }
        delete user.dataValues.password;
      };
 

    signtoken(user){
      const payload = {
        sub: user.id,
        role: user.role
      }
      const token = jwt.sign(payload, config.jwtSecret);
      return{
        user,
        token
      };
    }

    async sendRecovery(email){
      const user = await service.findByEmail(email)
      /*if(!user){
        throw boom.unauthorized();
      }*/
      const payload = { sub: user.id };
      const token = jwt.sign(payload, config.jwtSecret, {expiresIn: '15min'})
      const link = `http://myfrontend.com/recovery?token=${token}`
      await service.update(user.id, {recoveryToken: token})
      const mail = {
        from: config.emailSender, 
        to: email,
        subject: "Email para recuperar la contraseña", // Subject line
        
        html: `<b>ingresa a este link =>${link}</b>`

      }
      const rta = await this.sendMail(mail);
      return rta;
    }
    
    async changePassword(token, newPassword){
      try{
        const payload = jwt.verify(token, config.jwtSecret);
        const user = await service.findOne(payload.sub);
        if(user.recoveryToken !== token){
          throw  boom.unauthorized()
        }
        const hash = await bcrypt.hash(newPassword, 10);
        await service.update(user.id, {recoveryToken: null, password: hash})
        return { message: 'password changed'}

      }catch(error){
        throw boom.unauthorized();
      }
     
    }
   

    async sendMail(infoMail){
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: config.emailSender,
            pass: config.emailPassword
        }
      });
  
        // send mail with defined transport object
        await transporter.sendMail(infoMail) 
        return { message: 'mail sent'};

      }
    }
    module.exports = AuthService;
    