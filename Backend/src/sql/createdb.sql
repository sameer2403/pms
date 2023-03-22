CREATE DATABASE IF NOT EXISTS pmd;
use pmd;
CREATE TABLE IF NOT EXISTS user(
    user_id int PRIMARY KEY AUTO_INCREMENT,
    username varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    role ENUM("Admin","User") NOT NULL DEFAULT "User",
    status ENUM("Active","Inactive") NOT NULL DEFAULT "Active",
    password varchar(50) NOT NULL
);
CREATE TABLE IF NOT EXISTS project(
    project_id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(200) NOT NULL,
    assignee_id int NOT NULL,
    status ENUM("Active","Inactive") NOT NULL DEFAULT "Inactive",
    FOREIGN KEY(assignee_id) REFERENCES user(user_id)
);
CREATE TABLE IF NOT EXISTS user_projects(
    tmp_id int PRIMARY KEY AUTO_INCREMENT,
    user_id int,
    project_id int,
    FOREIGN KEY(user_id) REFERENCES user(user_id), 
    FOREIGN KEY(project_id) REFERENCES project(project_id)
);
