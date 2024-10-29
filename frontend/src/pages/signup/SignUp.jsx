import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<div className='w-full max-w-md p-8 rounded-lg shadow-lg bg-opacity-70 bg-gray-900 backdrop-blur-lg'>
				<h1 className='text-4xl font-extrabold text-center text-gray-100 mb-6'>
					Sign Up for <span className='text-blue-400'>WHISP</span>
				</h1>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className='label text-gray-300'>
							<span className='text-lg'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='David Beckham'
							className='input input-bordered w-full h-12 bg-gray-800 text-white border-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label text-gray-300'>
							<span className='text-lg'>Username</span>
						</label>
						<input
							type='text'
							placeholder='DavidBeckham'
							className='input input-bordered w-full h-12 bg-gray-800 text-white border-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label text-gray-300'>
							<span className='text-lg'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='input input-bordered w-full h-12 bg-gray-800 text-white border-gray-600 placeholder-gray-400 focus:outline-none focus:border-red-500'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link to="/login" className='text-sm text-blue-400 hover:underline inline-block mt-4'>
						Already have an account?
					</Link>

					<div className="mt-6">
						<button
							className='btn btn-primary btn-block h-12 text-lg font-semibold text-gray-100 bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out'
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner text-white'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
