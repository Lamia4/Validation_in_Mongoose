import jwt from "jsonwebtoken";


async function createToken (name, email) {

    // const { name, email } = req.body;


        const secret = process.env.SECRET;
    
        const options = {
            algorithm: "HS256",
            expiresIn: "30s"
        };
    
        const token = jwt.sign({name, email}, secret, options);



    return token
};

async function checkToken (token) {

    jwt.verify(token, process.env.SECRET, { algorithm: ["HS256"]}, (error, decoded) => {
        if(error) return console.log({error});

        console.log({ decoded });
    })
}

export default {

    createToken,
    checkToken
}