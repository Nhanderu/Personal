'use strict'

###

/source/models/content
Content model!

Contains the values and the business logic to create the contents of the page.

###

# Gets the actual year.
year = new Date()
    .getFullYear()
    
# Gets my age.
ageMs = new Date() - new Date 1996, 7, 27
age = Math.floor ageMs / 31557.6e6

# Creates model class.
class Content
    
    # Defines the keys that will be substitued. 
    ageKey: /{{age}}/g
    yearKey: /{{year}}/g
    
    constructor: (value) ->
        json = JSON.stringify value
            .replace @yearKey, year
            .replace @ageKey, age
        @value = JSON.parse json
        
module.exports = Content