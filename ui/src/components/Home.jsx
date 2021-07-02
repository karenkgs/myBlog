import React, { useEffect, useState } from "react";
import PostList from './PostList';
import WithPostListLoading from './WithPostListLoading';

function Home() {
  const PostListLoading = WithPostListLoading(PostList);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);

  return (
    <div className="home">
      <div class="container">
        <PostListLoading
         isLoading={appState.loading}
         repos={appState.repos}
        />
      </div>
    </div>
  );
}

export default Home;