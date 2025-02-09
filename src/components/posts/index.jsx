import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../../store/utils/thunks';
import Moment from 'react-moment';

const PostComponent = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch(fetchPostById(params.id));
  }, []);

  return (
    <>
      {posts.postById ? (
        <div className="article_container">
          <h2>{posts.postById.title}</h2>
          <div
            style={{
              background: `url(${posts.postById.imagexl})`,
            }}
            className="image"
          ></div>
          <div className="author">
            Createt by: <span>{posts.postById.author} - </span>
            <Moment format="DD.MMMM.YYYY">{posts.postById.createdAt}</Moment>
          </div>
          <div className="mt-3 content">
            <div //tozi div e neobhodim za da inpulni html tagovete
              dangerouslySetInnerHTML={{ __html: posts.postById.content }}
            ></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PostComponent;
