import { useEffect, useState } from 'react'
import { Container, PostCard } from '../components/index'

import AppwriteService from '../appwrite/config'

function AllPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        AppwriteService.getPosts().then((list) => {
            if (list.documents) {
                setPosts(list.documents)
            }
        })
    }, [])


    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => {
                        return (

                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts