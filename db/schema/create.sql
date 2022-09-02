DROP TABLE IF EXISTS users, posts, comments, post_likes, comment_likes, followers CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  image_path VARCHAR(255),
  caption VARCHAR(255),
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  post_id INTEGER REFERENCES posts(id),
  user_id INTEGER REFERENCES users(id),
  comment VARCHAR(255),
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  comment_replied_to_id INTEGER REFERENCES comments(id)
);

CREATE TABLE post_likes (
  user_id INTEGER REFERENCES users(id),
  post_id INTEGER REFERENCES posts(id)
);

CREATE TABLE comment_likes (
  user_id INTEGER REFERENCES users(id),
  comment_id INTEGER REFERENCES comments(id)
);
CREATE TABLE followers (
  following_user_id INTEGER REFERENCES users(id),
  followed_user_id INTEGER REFERENCES users(id)
);