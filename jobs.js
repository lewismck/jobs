//Pick randomly from a list of langauges and modifiers and return a pair
function generateJobDesc(){
//Array lists of lanaguages, jd snippets and modifier words (plus obligatory final sentence)
  var snippet = ["We are looking for Fresh Graduates who are", "Join our team of ambitious and upbeat", "The next members of our team will ideally be", "Our robust, agile, enterprise web solutions are built inhouse by",
                  "To help develop and build dynamic web based software solutions we require some new", "This exciting, innovative company is looking for people willing to develop themselves into"];
  var languages = [" Ruby"," Javascript", " CSS", " Python", " mySQL", " Java", " C++", " Perl", " erlang", " Prolog", " C", " Haskell", " HTML5", " PHP", " VB", " GO"];
  var modifiers = [" ninjas", " wizards", " gurus", " space children", " unicorns", " masters", " dominatrixes", " fetishists", " over enthusiasts", " dragon tamers", " super Saiyan level 3's"];
  var obligatory = " Great organisation and problem solving skills are also key.";
//generate the random elements
  var lang = languages[Math.floor(Math.random() * languages.length)];
  var mod = modifiers[Math.floor(Math.random() * modifiers.length)];
  var snip = snippet[Math.floor(Math.random() * snippet.length)];
//  var lang2 = languages[Math.floor(Math.random() * languages.length)];
//  var mod2 = modifiers[Math.floor(Math.random() * modifiers.length)];
//  var snip2 = snippet[Math.floor(Math.random() * snippet.length)];

//spit out a great HR appealing jd
  $("#jd").html(snip + "<strong>" + lang + mod + "</strong>.<br><small>" + obligatory +"</small>");
}
