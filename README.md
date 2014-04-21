#Background

The rationale behind this app was to build an intercative resume which would stand out from the many others which potential employers might see.

To achieve this, the app is in fact an online gaming resume, for which, content gets unlocked one piece at a time. Each piece of content is associated to a butterfly within the game. The gamer is encouraged to collect all the butterflies, and by doing so, is rewarded with seeing the full content of the resume.   

##Site Features

- Choice of player (Olly, Erik, Tom). The resume content will change for each game, depending on which player you choose. 
- Full CRUD system for Admin to manage user's, resume attributes.

##Data Model

4 models & 4 tables:

- Education, (belongs_to user)
- Career, (belongs_to user)
- Portfolio, (belongs_to user) 
- User, (has_many porfolios, has_many careers, has_many educations)

##Gems & Specifications

- Postgresql
- Active Record
- Rails
- JSON
- Javascript, jQuery, Underscore.js
- Phaser.io framework
- Facebook Open Graph API

Gems:

- bcrypt-ruby
- httparty
- protected_attributes
- rails_12factor
- thread_safe, '0.2.0'
- underscore-rails
- momentjs-rails


(development)

- pry-rails
- pry-debugger
- pry-stack_explorer
- better_errors

--------------

##To Do

- Email Contact
- Resume download
- Give players lives rather than reload each time
- Rspec testing
- Styling

--------------

Big shout out to Joel Turnbull and Mathilda Thompson at GA Sydney for their help with this! 


