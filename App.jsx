
const App = () => {

   const [post, setPost] = useState([
       {id: 1, title: 'javaScript 3', body: 'Description' },
       {id: 2, title: 'javaScript 3', body: 'Description' },
       {id: 3, title: 'javaScript 3', body: 'Description' },
   ])

    return (
    <div className="App">
        {post.map(post =>
        <Post post={post}/>
        )}
    </div>
    )
}

export default  App;
