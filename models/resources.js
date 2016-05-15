/**
 * Created by cshlovjah on 15.05.16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Resource = new Schema({
    id: String,
    title: String,
    eventColor: String,
    children: [{type: mongoose.Schema.Types.ObjectId, ref: 'ResourceChildrenModel'}]
});

var ResourceChildren = new Schema({
    id : String,
    repairPostId : String,
    title : String
});

var ResourceModel = mongoose.model('Resource', Resource);
var ResourceChildrenModel = mongoose.model('ResourceChildren', ResourceChildren);

module.exports.ResourceModel = ResourceModel;
module.exports.ResourceChildrenModel = ResourceChildrenModel;

