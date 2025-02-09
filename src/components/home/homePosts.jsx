import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/utils/thunks';
import { Button } from 'react-bootstrap';

import Masonry from 'react-masonry-css';

const HomePosts = () => {
  const homePosts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ page: 1, order: 'desc', limit: 6 }));
  }, []);

  const loadMorePosts = () => {
    const page = homePosts.articles.page + 1;
    dispatch(fetchPosts({ page, order: 'desc', limit: 6 }));
  };

  return (
    <>
      <Masonry
        breakpointCols={{ default: 3 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      ></Masonry>
      {!homePosts.articles.end && !homePosts.loading ? (
        <Button variant="outline-dark" onClick={() => loadMorePosts()}>
          Load More Posts
        </Button>
      ) : null}
    </>
  );
};

export default HomePosts;
