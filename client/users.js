import { Template } from "meteor/templating";
import list from "../imports/db/list";

Template.users.helpers
(
    {
        list : function()
        {
            return list.find();
        }
    }
)