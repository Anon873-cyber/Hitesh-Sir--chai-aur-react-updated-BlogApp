import { useState ,useEffect} from 'react'
import React  from 'react'
import { Container, PostForm } from '../components'
import authService from '../appwrite/auth'

 const AddPost = () => {
   
    return (
        <div className='py-8'>
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}

export default AddPost