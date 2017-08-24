'use strict'

eventsApp.factory('eventData', function () {
  return {
    event: {
      name: 'Angular Boot Camp',
      date: '10/10/2017',
      time: '10:30 am',
      location: {
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageUrl: '/img/angularjs-logo.png',
      sessions: [
        { 
          name: 'Directives Masterclass',
          level: 'introductory',
          duration: 1,
          upvoteCount: 0
        },
        { name: 'Scopes for fun and profit',
          level: 'intermediate',
          duration: 2,
          upvoteCount: 0
        },
        { name: 'Well Behaved Controllers',
          level: 'advanced',
          duration: 4,
          upvoteCount: 0
        }
      ]
    }
  }
})