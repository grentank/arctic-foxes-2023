import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './ui/NavBar'
import MainPage from './pages/MainPage'
import AddPostPage from './pages/AddPostPage'
import AllPostsPage from './pages/AllPostsPage'
import OnePostPage from './pages/OnePostPage'

export default function App({ posts, onePost }) {
  return (
    <div className='container'>
        <NavBar />
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/posts/add' element={<AddPostPage />} />
            <Route path='/posts' element={<AllPostsPage posts={posts} />} />
            <Route path='/posts/:postId' element={<OnePostPage onePost={onePost} />} />
        </Routes>
    </div>
  )
}
