import React, { useEffect, useState } from "react";
import { getPosts } from "../services/postServices";

export default function usePagination(isInView: boolean): {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
  isFullyFetched: boolean;
} {
  const [offset, setOffset] = useState<number>(0);
  const [isFullyFetched, setIsFullyFetched] = useState<boolean>(false);
  const [posts, setPosts] = useState<
    { userId: number; id: number; title: string; body: string }[]
  >([]);
  const visibilityChange = async () => {
    try {
      const postsPending = await getPosts(offset, offset + 5);
      const postsData: {
        userId: number;
        id: number;
        title: string;
        body: string;
      }[] = await postsPending.json();
      if (postsData.length > 0 && offset + 5 > 0) {
        setPosts([...posts, ...postsData]);
      } else {
        setIsFullyFetched(true);
        setOffset(0);
      }
      if (postsData.length !== 5) {
        setIsFullyFetched(true);
      }
    } catch (e) {
      return;
    }
    setOffset((prev) => prev + 5);
  };
  useEffect(() => {
    if (isInView && !isFullyFetched) {
      visibilityChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, isFullyFetched]);

  return { posts, isFullyFetched };
}
