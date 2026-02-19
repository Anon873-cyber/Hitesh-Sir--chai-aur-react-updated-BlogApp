import { useEffect, useState } from 'react'
import { Container, PostCard, PostForm } from '../components'

import AppwriteService from '../conf/conf.js'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        AppwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => {
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard post={post} />
                        </div>
                    })}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts