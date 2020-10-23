import Layout2 from '../../components/layout2'
import Content from '../../components/content'
import Head from 'next/head'
import styles from './feed.module.css'

export default function Dashboard() {
    return (
        <div className="w-full max-w-xl-1">
            <Head>
                <title>Feed</title>
            </Head>
            <div className="my-8">
                <h1 className='text-3xl'>Hello Jane</h1>
                <p>
                    How are you doing today? Would you like to share something with the comunity 🤗
                </p>
            </div>
            <div>
                <Layout2>
                    <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <p className="text-white text-s mb-2">Create post</p>
                        <Content>
                            <span className="mx-5 mt-4">
                                💬
                            </span>
                            <div className="mb-3 w-full mt-3">
                                <input className="appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="How are you feeling today?" />
                            </div>
                        </Content>
                        <div className="flex justify-end items-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Post
                            </button>
                            
                        </div>
                    </form>
                </Layout2>
            </div>
            <div>
                <Layout2>
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex w-full">
                            <img src="/photo.jpg" className="flex h-12 mr-4 rounded-3xl"/>
                            <div>
                                <span className="text-sm">Theresa Webb</span><br/>
                                <span className="text-xs">5mins ago</span>
                            </div>
                            <span className={styles.leftalign}>...</span>
                        </div>
                    <Content>
                        <span className="mx-5 mt-5">
                            👋
                        </span>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </Content>
                    <div>
                        💬 24 comments
                    </div>
                    </div>
                </Layout2>
            </div>
            <div>
                <Layout2>
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex">
                            <img src="/photo.jpg" className="flex h-12 mr-4 rounded-3xl"/>
                            <div>
                                <span className="text-sm">Theresa Webb</span><br/>
                                <span className="text-xs">8mins ago</span>
                                <span className="text-sm"> . Edited</span>
                            </div>
                            <span className={styles.leftalign}>...</span>
                        </div>
                    <Content>
                        <span className="mx-5 mt-5">
                            😞
                        </span>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </Content>
                    <div>
                        💬 24 comments
                    </div>
                    </div>
                </Layout2>
            </div>
        </div>
    )
}