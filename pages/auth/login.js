import Layout from '../../components/layout'
import Link from 'next/link'
import Head from 'next/head'

export default function login() {
    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <div className="w-full max-w-sm">
                <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                    <p className="text-center text-gray-500 text-xs">WELCOME BACK</p>
                    <p className="text-center text-white text-s mb-10">Log into your account</p>
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="username">
                            Email or Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your email or username" />
                    </div>
                    <div className="mb-6">
                        <div className='flex justify-between'>
                            <label className="block text-white text-sm mb-2" htmlFor="password">
                                Password
                            </label>
                            <span className='text-white text-sm'>
                                <a href='#'>Forgot password?</a>
                            </span>
                        </div>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center">
                        <a href="/dashboard/feed" className="w-full">
                            <button className="bg-blue-600 object-fill hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                                Login Now
                            </button>
                        </a>
                        
                    </div>
                    <p className="flex text-center text-gray-500 text-sm mt-4">
                        Not registered yet? <Link href='/auth/register'><a className='text-white ml-1'>Register ➜</a></Link>
                    </p> 
                </form>
            </div>
            
        </Layout>
    );
};

function arrow() {
    return (
        <svg class="fill-current text-teal-500 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"/>
        </svg>
    )
}