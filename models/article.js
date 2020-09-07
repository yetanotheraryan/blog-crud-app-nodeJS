const mongoose = require("mongoose");
const marked = require("marked");
const slugify = require("slugify");
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const dompurify = createDomPurify(new JSDOM().window);

const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String
    },
    markdown:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: ()=>Date.now()
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedHtml:{
        type: String,
        required: true
    }
});

// the below function inside pre runs every time we do any CRUD application.
articleSchema.pre('validate', function(next){
    if(this.title){
        this.slug = slugify(this.title, {lower: true, strict: true});
    }
    if(this.markdown){
        // marked converts markdown to html, sanitize sanitizes the html.
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
    }
    next();
})

// now we have a table called Article in DB of schema articleSchema. 

module.exports = mongoose.model('Article', articleSchema)