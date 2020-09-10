CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomName VARCHAR(20),
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(20),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  content VARCHAR(120) NOT NULL,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) references users(id),
  FOREIGN KEY(room_id) references rooms(id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE friends (
  user_id INT NOT NULL,
  friend_id INT NOT NULL,
  FOREIGN KEY(user_id) references users(id),
  FOREIGN KEY(friend_id) references users(id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

