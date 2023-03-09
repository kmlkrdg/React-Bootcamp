import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Error from './Error';

function Users() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => {
    //     setUsers(res.data);
    //     const userId = res.data[0].id;
    //     axios(
    //       `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    //     ).then((res) => {
    //       setPosts(res.data);
    //     });
    //   })
    //   .catch((e) => setError(e.message))
    //   .finally(() => setLoading(false));

    const getData = async () => {
      try {
        const { data: users_data } = await axios(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(users_data);
        setUsersLoading(false);

        const { data: posts_data } = await axios(
          `https://jsonplaceholder.typicode.com/posts?userId=${users_data[0].id}`
        );

        setPosts(posts_data);
        setPostsLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };

    getData();
  }, []);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1>Users</h1>

      {usersLoading && <Loading message={'Kullanıcılar yükleniyor...'} />}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <hr />

      <h1>Posts</h1>
      {postsLoading && <Loading message={'Gönderiler yükleniyor...'} />}
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default Users;
