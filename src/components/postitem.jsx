import { useParams } from 'react-router-dom'; //използва се за динамично подаване на параметри

const PostItem = () => {
  let params = useParams();

  console.log(params);

  return (
    <>
      <div>Post id = {params.id}</div>
    </>
  );
};

export default PostItem;
