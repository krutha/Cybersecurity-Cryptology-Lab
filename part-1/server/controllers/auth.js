const users = []
const bcrypt = reqire('bcryptjs')
module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username ){
           const auth =bcrypt.compareSync(users[i].password , password) 
           if(auth){
             let userToReturn={...USER[i]}
             delete userToReturn.passwordHash
              res.status(200).send(userToReturn)
           }
        }    
         
      } 
      
      res.status(400).send("User not found.")
    },



    register: (req, res) => {
      const {username, email,firstname,lastname,password}=req.body
      const salt = bcrypt.genSaltSync(5);
       const passwordHash = bcrypt.hashSync(password, salt);
       let user ={username,emial,firstname,lastname,passwordHash}
       user.push(user)
       let userToReturn = {...user}
       delete userToReturn.passwordHash
       // console.log('Registering User')
        //console.log(req.body)
        //users.push(req.body)
        res.status(200).send(req.body)
    }
}