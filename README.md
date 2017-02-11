# Issue demo
For some reasons Google Analytics events are not tracked with `okgrow/analytics` if `analytics.track` 
is called in `action` method of `kadira:flow-router`.
This simple app demonstrates this issue.

## Setup
Before running the app please create Google Analytics id and paste tracking number in settings.json

## Run
To run app run
```
$ meteor npm install
$ meteor run --settings settings.json
```

## Demo
To see the difference go to your Google Analytics dashboard -> Real-time -> Events.

 * In another window open [http://localhost:3000/call-direct](http://localhost:3000/call-direct)
 * Note that pageview event appeared in Google Analytics
 * Open [http://localhost:3000/call-in-timeout](http://localhost:3000/call-in-timeout)
 * Note that not only pageview but also "Will it work?" event has been recorded by Google Analytics
