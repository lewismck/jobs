/*
 * Broader scope for variables - makes function easier to read
 * Array lists of lanaguages, jd snippets and modifier words (plus obligatory final sentence)
*/
var openSnippet = ["We are looking for", "Prospective hires will ideally be", "Our client is interested in",
                   "We are seeking creative and enthusiastic"];

var finishSnippet = [" who will enhance our current workforce", " who will fit with our agile workflow",
                     " who can demonstrate enthusiasm for learning new technologies and working practices.",
                     " that will embrace the challenge of working in an agile development team.",
                     " who can demonstrate an understanding of Object Relational Mapping frameworks",
                     " with an awareness of Domain Driven Design, CQRS, and/or Event Sourcing techniques."];

var startSnippet = ["We are looking for Fresh Graduates who are", "Join our team of ambitious and upbeat", "The next members of our team will ideally be", "Our robust, agile, enterprise web solutions are built inhouse by",
                    "To help develop and build dynamic web based software solutions we require some ", "This exciting, innovative company is looking for people willing to develop themselves into",
                    "Our creative and UX teams are eager to work alongside", "A global provider of financial news, data and decision assistance tools are seeking",
                    "We will offer fantastic career progression, along with set training for new hires to develop into", "The company prides itself on not being your stereotypical company, instead we're made of",
                    "Good knowledge and understanding of common design patterns and OO principles is a must, basically be",
                    "Would you like the opportunity to work on complex, globally used, enterprise grade, Cloud Software platforms? Then apply now we're looking for",
                    "Our team of growth hacking digital marketing gods must be joined on mount SEOlympus by",
                    "Good team working skills are a must. This is a highly collaborative, idea sharing & Agile environment welcoming new"];

var closeSnippet = [" needed for a global brand, who are market leaders in their field",
                    " needed to join our teams working on cutting-edge Service Orientated Architecture based solutions for the cloud community",
                    " willing to embrace the challenge of working in an agile development team",
                    " needed to devise possible solutions to predicted problems, whilst also evaluating other options",
                    " required, ideally with a good understanding of n-tier development approaches",
                    " wanted. Preferrably with a degree in Software Engineering or Computer Science",
                    " with an awareness of Service Orientated Architectures are desired"];

var languages = [" Ruby"," Javascript", " CSS", " Python", " mySQL", " Java", " C++", " Perl", " erlang", " Prolog", " C", " Haskell", " HTML5", " PHP", " VB", " GO", " Angular", " React", " SCALA"];

var modifiers = [" ninjas", " wizards", " gurus", " space children", " unicorns", " masters", " dominatrixes", " fetishists", " over enthusiasts", " dragon tamers", " super Saiyan level 3's", " Star Lords", " Nazgul"];

var obligatory = " Great organisation and problem solving skills are also key.";

/*
 *Pick randomly from lists of languages and modifiers and return a job description
*/
function generateJobDesc(){
//generate the random elements
  var lang = languages[Math.floor(Math.random() * languages.length)];
  var mod = modifiers[Math.floor(Math.random() * modifiers.length)];
  var snip = startSnippet[Math.floor(Math.random() * startSnippet.length)];
  var closeSnip = closeSnippet[Math.floor(Math.random() * closeSnippet.length)];
  var startSnip = openSnippet[Math.floor(Math.random() * openSnippet.length)];
  var finishSnip = finishSnippet[Math.floor(Math.random() * finishSnippet.length)];
 // generate a random number to decide how to put the elements together
  var decider = getRandomInt(1, 100);

//spit out a great HR appealing jd
//hide, then fadein because that's the only way to get fadeIn to work on already visible elements apparently
if(decider % 2 == 0){
  $("#jd").hide().html(snip + "<strong>" + lang + mod + "</strong>.<br><small>" + obligatory + "</small>").fadeIn(200);
}
else if(decider % 3 == 0){
  $("#jd").hide().html(startSnip +"<strong>"+ lang + mod + "</strong>" + finishSnip + ".<br><small>" + obligatory + "</small>").fadeIn(200);
}
else {
  $("#jd").hide().html("<strong>" + lang + mod + "</strong>" + closeSnip + ".<br><small>" + obligatory + "</small>").fadeIn(200);
}
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 * From Mozilla developer library
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
