import { useParams, useLocation } from 'react-router-dom'; //използва се за динамично подаване на параметри

const PostItem = () => {
  let params = useParams();
  let location = useLocation();

  console.log(params);

  return (
    <>
      <div>Post id = {params.id}</div>
    </>
  );
};

export default PostItem;
