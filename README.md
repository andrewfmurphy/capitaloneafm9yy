View completed project at https://capitaloneafm9yy.herokuapp.com

# Capital One Summit Challenge (Summer 2019)

This is my submission for the Capital One Summit coding challenge. Our task was to build a web application that would serve as a kiosk, allowing for users to find information about various parks.

The deliverables were described as follows:

>1.  Provides tools to assist users in finding specific information, such as state and designation filtering, name and keyword search.
>2.  Lists details about specific visitor centers, as well as nearby campgrounds.
>3.  Displays alerts, articles, events, and news releases about a selected destination.
>4.  Provides educational information about a selected destination, utilizing available lesson plans as well as relevant people and places associated with the location.

>Option: You may want to include the bonus features:
>-   When displaying information, utilize relevant symbols from the NPS Symbol Library to illustrate relevant items.
>-   Utilize latitude and longitude data for map visualization or distance calculations.

>**Submissions will be graded on the following criteria:**-   Meets Deliverables
>-   Code Quality & Clarity
>-   Creativity / Aesthetics (think UI/UX)

# Implementation
## Backend

Although all of my data was coming from an external API, I decided to wrap my external API calls in an internal backend API. I used Node.JS and Express.JS for my backend server and built a simple backend API which the front-end would use to make requests. Routing calls through a backend API as opposed to client-side calls is also good practice because it's much more secure and scales much better with the architecture of the application.

## Frontend

As a view engine, I used React along with React-Bootstrap and some custom CSS for the styling. I used create-react-app to scaffold my application and modified it from there to work with Express and deployment to Heroku. From the data provided by the API, I decided to structure my application into three main "views". The main page, which also contains the search feature, the search results page, and the parks page, essentially a "dashboard" for each park. 
The main page contains a banner and the search feature, the entry point into our application. The search feature allows users to search for parks by state, with additional options for query and designation filtering.

The results page contains all search results, with an additional option to search again.

Within the parks page, there are separate views for each of the various API endpoints (alerts, campgrounds, visitor centers, etc). Each endpoint from the API was broken down into a view component, and a component that would handle each individual listing.

# Obstacles
By far the biggest obstacle in completing this challenge was the inconsistency of the API. While data for major parks (Yellowstone National Park, Grand Canyon National Park) was decent, the quality of data for smaller parks was extremely poor. A design challenge that I faced and attempted to address was *consistency*, presenting information with a consistent layout and format despite the shortcomings of the API. I soon realized it was essential to validate the data before attempting to render. Even the available data was often poorly formatted or *incorrect*.  
# Additional Ideas
Hypothetically, my next step in improving this application would be to implement an internal database. Right now, the website is entirely reliant on external API calls. Although it's simple and works well enough, the latency of the application is bottlenecked by these requests. In addition, because my website is completely reliant upon the National Park Service's servers, when their servers go down, my website will go down as well. In order to make the website truly "production-ready", the next step would be for the client to make requests from a database, and to have our server crawl the API regularly to update the database as necessary. At the very least, the database could serve as a cache of the most popular parks. Finally, a database would allow for search times to be dramatically improved. The NPS API right now is not very conducive to nationwide searches, and because processing a request  for a nationwide search increased the load time from ~10 seconds to > 2 minutes in my testing, I decided to restrict searches to the state level only. Storing parks in an internal database would enable a nationwide search with a reasonable page load time.

# Conclusion
Working with the NPS API gave me perspective as to the challenges software developers face in the industry. Within the confines of our school curriculum, there are clear guidelines as to expected inputs and outputs, and (most of the time) no one is trying to break your program or cause unexpected behavior. Development in the real world is all about edge cases and as I realized the hard way, the API is not my friend. 

I appreciate the challenge, thanks for reading!

Andrew Murphy
