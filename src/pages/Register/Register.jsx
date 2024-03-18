import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const { creatUser } = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)

        // creat user
        creatUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div >
                <h2 className="text-3xl my-10 text-center">Register Your Account</h2>
                <form className="lg:w-1/2 md:3/4 mx-auto" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an accout? <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;