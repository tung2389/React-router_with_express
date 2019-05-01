function create_user(email, username, password, callback)
{
    user.findOne({email:email},function(err,data){

        //if user existed
        if(data !== null) {
        callback("That email is already registered");
        }

        //If ok
        else {
        new_user(email,username,password);
        callback("The account has been created successfully");
        }
    });
}

function new_user(email,username,password)
{
        user.create({
            email:email,
            username:username,
            password:password
        })
}

module.exports = create_user;