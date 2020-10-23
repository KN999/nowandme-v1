import Layout from '../components/layout'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
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
  
}
