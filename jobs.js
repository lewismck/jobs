//Pick randomly from a list of langauges and modifiers and return a pair
function generateJobDesc(){
//Array lists of lanaguages, jd snippets and modifier words (plus obligatory final sentence)
  var snippet = ["We are looking for Fresh Graduates who are", "Join our team of ambitious and upbeat", "The next members of our team will ideally be", "Our robust, agile, enterprise web solutions are built inhouse by",
                  "To help develop and build dynamic web based software solutions we require some ", "This exciting, innovative company is looking for people willing to develop themselves into",
                  "Our creative and UX teams are eager to work alongside", "A global provider of financial news, data and decision assistance tools are seeking",
                  "We will offer fantastic career progression, along with set training for new hires to develop into", "The company prides itself on not being your stereotypical company, instead we're made of",
                  "Good knowledge and understanding of common design patterns and OO principles, basically be",
                  "Would you like the opportunity to work on complex, globally used enterprise grade Cloud Software platform? Then apply now we're looking for",
                  "Our team of growth hacking digital marketing gods must be joined on mount SEOlympus by",
                  "Good team working skills are a must. This is a highly collaborative, idea sharing & Agile environment welcoming new"];
  var languages = [" Ruby"," Javascript", " CSS", " Python", " mySQL", " Java", " C++", " Perl", " erlang", " Prolog", " C", " Haskell", " HTML5", " PHP", " VB", " GO", " Angular", " React", " SCALA"];
  var modifiers = [" ninjas", " wizards", " gurus", " space children", " unicorns", " masters", " dominatrixes", " fetishists", " over enthusiasts", " dragon tamers", " super Saiyan level 3's", " Star Lords", " Nazgul"];
  var obligatory = " Great organisation and problem solving skills are also key.";
//generate the random elements
  var lang = languages[Math.floor(Math.random() * languages.length)];
  var mod = modifiers[Math.floor(Math.random() * modifiers.length)];
  var snip = snippet[Math.floor(Math.random() * snippet.length)];
//  var lang2 = languages[Math.floor(Math.random() * languages.length)];
//  var mod2 = modifiers[Math.floor(Math.random() * modifiers.length)];
//  var snip2 = snippet[Math.floor(Math.random() * snippet.length)];

//spit out a great HR appealing jd
//hide, then fadein because that's the only way to get fadeIn to work on already visible elements apparently
  $("#jd").hide().html(snip + "<strong>" + lang + mod + "</strong>.<br><small>" + obligatory +"</small>").fadeIn(200);
}
