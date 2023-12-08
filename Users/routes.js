import * as dao from "./dao.js";


function UserRoutes(app){
    const signIn = async (req, res) => {
        const {username, password} = req.body;
        const currentUser =  await dao.findUserByCredentials(username, password);
        req.session['currentUser'] = currentUser;
        res.json(currentUser);
    }

    const signup = async (req, res) => {
        const user = await dao.findUserByUsername(req.body.username);
        if (user) {
            res.status(400).json(
                { message: "Username already taken" });
        }
        const currentUser = await dao.createUser(req.body);
        req.session['currentUser'] = currentUser;
        res.json(currentUser);

    };
    const signout = (req, res) => {
        req.session.destroy();
        res.json(200);
    };

    const findUserById = async (req, res) => {
        const user = await dao.findUserById(req.params.userId);
        res.json(user);
    };

    app.get("/api/users/:userId", findUserById);
    app.post("/api/users/signin", signIn);
    app.post("/api/users/signup", signup);
    app.post("/api/users/signout", signout);


}

export default UserRoutes;