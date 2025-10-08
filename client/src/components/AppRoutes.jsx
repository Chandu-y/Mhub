import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllPosts from '../pages/AllPosts';
import MyHome from '../pages/MyHome';
import PostDetail from '../pages/PostDetail';
import PostDetailView from './PostDetailView';
import Rewards from '../pages/Rewards';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllPosts />} />
      <Route path="/all-posts" element={<AllPosts />} />
      <Route path="/my-home" element={<MyHome />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/post/:postId" element={<PostDetail />} />
      <Route path="/post-detail-view" element={<PostDetailView />} />
    </Routes>
  );
};

export default AppRoutes;
