import { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'

import  AppwriteService from '../conf/conf.js'

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
            <div>AllPosts</div>
        )
    }

export default AllPosts