import React from "react";
import "./App.scss";
import usePagination from "./ressources/usePagination";
import Lottie from "lottie-react";
import loader from "./utils/lottie/loader_lottie.json";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { posts, isFullyFetched } = usePagination(inView);
  return (
    <div className="App">
      <div className="posts">
        {posts.map((eachPost, index) => (
          <div
            style={{
              background: `center / cover no-repeat url('https://picsum.photos/200/200?random=${index}&blur=9')`,
            }}
            className="each-post"
            key={index}
          >
            <p className="each-post-title">{eachPost.title}</p>
            <p className="each-post-body">{eachPost.body}</p>
          </div>
        ))}
        <div ref={ref} className="loader">
          {!isFullyFetched && <Lottie loop animationData={loader} />}
        </div>
      </div>
    </div>
  );
}

export default App;
