import { Meteor } from 'meteor/meteor'

import list from "../imports/db/list";


Meteor.startup(() => {
  if( list.find().count() <= 0 )
  {
    list.insert(
      {
        username : "Federica Alfano",
        email: "alfanofederica95@gmail.com",
        github: "https://github.com/fedre30",
      }
    );
  }
});
