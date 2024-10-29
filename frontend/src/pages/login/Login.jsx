import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<div className='w-full max-w-md p-8 rounded-lg shadow-lg bg-opacity-70 bg-gray-900 backdrop-blur-lg'>
				<h1 className='text-4xl font-extrabold text-center text-gray-100 mb-6'>
					Login to <span className='text-blue-400'>WHISP</span>
				</h1>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className='label text-gray-300'>
							<span className='text-lg'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='input input-bordered w-full h-12 bg-gray-800 text-white border-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label text-gray-300'>
							<span className='text-lg'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='input input-bordered w-full h-12 bg-gray-800 text-white border-gray-600 placeholder-gray-400 focus:outline-none focus:border-red-500'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link to='/signup' className='text-sm text-blue-400 hover:underline inline-block mt-4'>
						{"Don't"} have an account?
					</Link>

					<div className="mt-6">
						<button 
							className='btn btn-primary btn-block h-12 text-lg font-semibold text-gray-100 bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out'
							disabled={loading}>
							{loading ? <span className='loading loading-spinner text-white'></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
