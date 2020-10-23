import Layout from '../../components/layout'
import Link from 'next/link'
import Head from 'next/head'

export default function Register() {
    return (
        <Layout>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className="w-full max-w-sm">
                <form className="shadow-md rounded px-10 pt-6 pb-8 mb-4">
                    <p className="text-center text-gray-500 text-xs">SIGN UP</p>
                    <p className="text-center text-white text-s mb-10">Create an account to continue</p>
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Choose a preferred username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm mb-2" htmlFor="username">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Choose a strong Password" />
                    </div>
                    <div className="flex items-center">
                        <a href="/dashboard/feed" className="w-full">
                            <button className="bg-blue-600 object-fill hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                                Continue
                            </button>
                        </a>
                        
                    </div>
                    <p className="flex text-center text-gray-500 text-sm mt-4">
                        Already have an account? <Link href='/auth/login'><a className='text-white ml-1'>Login ➜</a></Link>
                    </p> 
                </form>
            </div>
        </Layout>
    );
};