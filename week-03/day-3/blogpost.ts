'use strict'
// Create a few blog post objects:
// "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
// Lorem ipsum dolor sit amet.
// "Wait but why" titled by Tim Urban posted at "2010.10.10."
// A popular long-form, stick-figure-illustrated blog about almost everything.
// "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
// Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.

class blogPost {
    private authorName: string;
    private title: string;
    private text: string;
    private publicationDate: string;

    constructor(authorname:string, title:string, text:string, publicationdate:string){
        this.authorName = authorname;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationdate;
    }
}
let blog1 = new blogPost ('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let blog2 = new blogPost ('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
let blog3 = new blogPost ('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

console.log(blog1);
console.log(blog2);
console.log(blog3);