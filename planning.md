#User Stories:

- User 1 will need to … so he/she can do...

# Pseudocode(may go in .md file):

# Landing page

- User types PiQ url and reaches the landing page
- User can click on the daily “piq” for expanded/detail view
- User can click on one of the user auth links that will go to the same user auth page

#Global Page Structure

- Logo (on and off navigation bar depending on page?)
- Navigation bar (not sure I want global)
- Galleries (will just have the one for now but lead to a list eventually)
- Login/LogOut

# User Authorization page

- User can create account or login via form and then appropriate link
- If authorized- user is taken to new/current Main Gallery Page
- If not authorized- user stays on auth page and alert is triggered

#Main User Galley page

- User can create a new gallery via button leading to Photo Submit page (MVP?)
- Gallery has Photo Add button to add piq with name, url, and description
- User sees empty/populated gallery
- New user
  - Shown 3 recommended piqs
  - User can click on a photo thumbnail to expand

#Photo Expand

- User sees enlarged piq, title, full/a description
- User sees update and delete button
- User sees empty heart with hover effect and click ability to love it (maybe big ‘I’ for Inspired) (MVP?)

#Photo Add

- User sees form containing name, url, description, and create button
- Designate name of gallery (MVP?)
- User sees Description placeholder “creative description”, or “tell us what inspiration comes to mind/does this photo bring about”
- User is taken to gallery photo was submitted to

#Photo Edit

- User sees form that populates the name, url, and description
- User can select update or delete, and user is redirected back to the gallery that the photo originated

#Advance functionality:

- User create account will accept additional user information (name to start- helpful info to display welcome back messages, user identity on top of page, etc.). Maybe addition info (birthday, etc.), but might be hard with user trust
- User will be able to upload their own piq vs just a link to other piq’s they like on the web
- Photo expand- user can like a photo
- Other users comments on the photo are tagged to the user name and not entered manually
- Need cool logo (end task)
- Photo Expand- user sees “add to collection” button that takes user to Add to Collection form, allowing them to start or add to PiQ Gallery
- Social Media links

#Advanced Tier 2:

- Share photo with with social media accounts (FB, Twitter, InstaGram, etc.)
- API into google photos (maybe to share with Google Photos gallery)
- A short checkbox form at “create account” to capture types of photos they like (future purpose of showing then the PiQ of the day
- User settings for updating password and “photo likes” preferences form
- Tag individual photos from any gallery and add it to a collection/gallery
- User can do a mass delete of an entire gallery, and/or multiple photos within a gallery without having to click and delete individually
- Photo Expand with be an in-line pop-up window instead of an seperate page
- Other users can comment on the photo

#Pages:

- Landing page (MVP)
- PiQ of day to greet user
- Create Account/Login/Logout Page (MVP)
- Main Gallery Page (MVP)
- Additional Galleries
- Photo Expand Page

#Routes:

- User Authentication (MVP)
- Photo (MVP)
- User comments on photos?? (not sure if this is part of the photos route or treated like a seperate blog)
- Additional Galleries?? (need a GET route at minimum)
