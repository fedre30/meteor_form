import { Template } from "meteor/templating";
import list from "../imports/db/list";


Template.form.events
(
    {
        "click #submit" : function( event, template )
        {
            list.insert
            (
                { 
                    username : template.find( "#username" ).value,
                    email : template.find( "#email" ).value,
                    github : template.find( "#github" ).value,
                }
            );
          template.find("#form").reset();

        }

    }
)