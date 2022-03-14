# Tunest

## Table of Contents
<ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
        <a href="#project-details">Project Details</a>
        <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#architecture">Architecture</a></li>
        </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
</ol>

## Getting Started
TO BE UPDATED

### Prerequisites
To run locally, you must have `npm`, `create-react-scripts`, `Java 17`, and `Maven` installed.

To download the necessary packages needed to run the 
frontend server, type below into terminal. 
```
npm install
```

To start the frontend server, type below into terminal. The application will open in http://localhost:3000.
```
npm start
```

To start the backend server, use an IDE that supports Java and Maven for build automation. The server will open in http://localhost:8080.

## Project Details

### Features
- [ ] User can search for podcasts
- [x] User can play podcasts
- [ ] User can save podcasts
- [x] User can get details of a podcast
- [x] User can add a podcast to the current list of podcasts
- [ ] User can like or dislike a podcast
- [x] User can sort podcasts
- [x] User can sign in with Google


<!-- - [ ] Create an application that can be interacted with in a minimum of three different ways by the user
- [ ] Usage of a specified architectural pattern
- [ ] Integration with a backend service with CRUD operations
- [ ] Integration of a 3rd party RESTful API
- [ ] Usage of at least one Object Oriented principle -->

### Architecture

This project follows the Model-View-Controller (MVC) software design pattern. 

#### Model
![Schema](https://i.imgur.com/xwOTrM6.png)

#### View


#### Controller

### API
Base url: http://localhost:8080/api/v1

| **request** | **url**                                                    | **description**                                       | **response**     |
|-------------|------------------------------------------------------------|-------------------------------------------------------|------------------|
| GET         | `/podcasts`                                                | Get all podcasts                                      | List of Podcasts |
| GET         | `/podcast/:id`                                             | Get a podcast through its id                          | Podcast          |
| POST        | `/podcast`                                                 | Create a new podcast                                  | None             |
| GET         | `/podcast/:id/episodes`                                    | Get all episodes from a specific podcast              | List of episodes |
| POST        | `/episode`                                                 | Create a new episode                                  | None             |
| GET         | `/rss-feed/podcast?url={rssFeedUrl}`                       | Get details of a podcast through it's RSS feed        | Podcast          |
| POST        | `/rss-feed/episode?podcastId={podcastId}&url={rssFeedUrl}` | Add episodes to a podcast from the podcast's FSS feed | None             |
| POST        | `/user/register`                                           | Create a new user                                     | None             |
| GET         | `/saved-podcasts/:googleId`                                | Get user's saved podcasts                             | List of Podcasts |
| POST        | `/saved-podcasts/:googleId`                                | Add a podcast to user's saved podcasts                | None             |

## Acknowledgements
TO BE UPDATED