import { useContext ,useState} from 'react';
import './comments.scss'
import {AuthContext} from '../../context/authContext';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import moment from 'moment';
const Comments = ({postId}) => {
  const [desc, setDesc] = useState("");
  const {currentUser}=useContext(AuthContext);
  const { isLoading, error, data } = useQuery(["comments"], async ()=>{
    return makeRequest.get("/comments?postId="+postId).then((res)=>{
     return res.data;
   });
}); 

const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId});
    setDesc("");
  };


  return (
    <div className='comments'>
      <div className="write">
        <img src={currentUser.profilePicture} alt="" />
        <input type="text" placeholder='Write a Comment' value={desc} onChange={e=>setDesc(e.target.value)}/>
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading ? "Loading"
        :data.map(comment=>(
            <div className="comment" key={comment.createdAt}>
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">{moment(comment.createdAt).fromNow()}</span>
            </div>
        ))
    }</div>
  )
}

export default Comments
