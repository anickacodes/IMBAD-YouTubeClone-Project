### React YouTube Project

In this project, you will create a YouTube clone that lets you search for videos using the YouTube API. Then, you'll be able to select a video and watch it.

Building this application will be a team effort that will require you to collaborate with at least one other classmate. You will build the application leveraging your knowledge of React and utilizing your design skills.


# Completion
To complete this project, you will need to build a React application that meets the following feature and technical requirements.


# Overall requirements
*Create a GitHub repository for the front-end application and upload your code to it.*

*Your front-end application should be successfully deployed to the web.*

Your front-end repository should have a readme.md file with setup instructions for your application. Your readme.md file should also include a link to your deployed application.


# Feature requirements

*To complete this application, you will need to build a React application that allows for viewing and searching of videos.

A [`Home page`] should exist, which includes a search bar and prompts the user to search for videos on load.

An [`About page`] should exist, which should include information about who worked on the application and links to their GitHub profiles.

A [`navbar`] should appear on every page that includes links to the Home page and the About page. 

Upon using the Home page's search bar, the user should be presented with the first 8 videos that return from the YouTube API. A thumbnail from the video should be shown as well as the title of the video.

If a new search is performed on the Home page, the previous results should be cleared and new results should be shown.

When a user clicks on a displayed video, they should be brought to a new page with a new URL specific to that video. This is the video's Show page.

On the Show page, the user should be able to see a larger version of the video and be able to play it.

On the Show page, a form should exist with two fields: name and comment. When a user fills out the form and submits it, A comment should appear on the page.


If a user leaves either the name or comment field blank, an error message should be shown and a comment should not be created.


# Mastery rubric
This section of the project is designed to measure your increasing skill at writing good code and following best practices.



**Stretch goals**
This section of the project measures your ability to go above and beyond in creating your project. To score points in this section, you should incorporate a feature, technology, or skill not explicitly required by the project instructions.

When you submit your pull request, make sure to include a description of any stretch goals you implemented. You may choose from the list below or come up with features or tasks that are more relevant to your specific implementation of the project.
*...............................................................*

Include more user-set search criteria such as a maximum number of results or in what order the videos should be displayed.

Keep tabs on what searches have previously been made and show them below the search bar.

Allow for videos to be "favorited." Favorited videos should be displayed on their own page.

Track which Show pages have been visited and create a History page that shows all previously viewed videos.

Implement LocalStorage to persist data, so that the data does not disappear upon refreshing.