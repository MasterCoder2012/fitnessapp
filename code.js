setActiveCanvas("OverviewCanvas");
setStrokeColor(rgb(54, 47, 90));
setFillColor(rgb(54, 47, 90));
rect(0, 0, 250, 150);
setStyle("OverviewCanvas", "border-radius: 10pt;");
setStyle("HistoryChart", "border-radius: 10pt; background-color:black;");
var stepsGoal = 10000;
var caloriesGoal = 400;
var distanceGoal = 5;
var todaySteps = 0;
var todayCalories =0;
var todayDistance = 0;
var currentUser = "";
var goals = {steps:10000, calories:400, distance:5};
var stepsHistory = {day1:0,day2:0,day3:0,day4:0, day5:0};
var caloriesHistory = {day1:0,day2:0,day3:0,day4:0, day5:0};
var distanceHistory = {day1:0,day2:0,day3:0,day4:0, day5:0};
function initialise(records) {
  currentUser = records[0];
  stepsHistory = JSON.parse(currentUser.stepsHistory);
  caloriesHistory = JSON.parse(currentUser.caloriesHistory);
  distanceHistory = JSON.parse(currentUser.distanceHistory);
  var today = new Date().toISOString().split("T")[0];
  if (currentUser.lastActiveDay !== today) {
  stepsHistory.day1 = stepsHistory.day2;
  stepsHistory.day2 = stepsHistory.day3;
  stepsHistory.day3 = stepsHistory.day4;
  stepsHistory.day4 = stepsHistory.day5;
  stepsHistory.day5 = 0;
  caloriesHistory.day1 = caloriesHistory.day2;
  caloriesHistory.day2 = caloriesHistory.day3;
  caloriesHistory.day3 = caloriesHistory.day4;
  caloriesHistory.day4 = caloriesHistory.day5;
  caloriesHistory.day5 = 0;
  distanceHistory.day1 = distanceHistory.day2;
  distanceHistory.day2 = distanceHistory.day3;
  distanceHistory.day3 = distanceHistory.day4;
  distanceHistory.day4 = distanceHistory.day5;
  distanceHistory.day5 = 0;
  updateRecord("USERS", {
    id: currentUser.id,
    PASSWORD: currentUser.PASSWORD,
    USERNAME: currentUser.USERNAME,
    stepsHistory: JSON.stringify(stepsHistory),
    caloriesHistory: JSON.stringify(caloriesHistory),
    distanceHistory: JSON.stringify(distanceHistory),
    goals: currentUser.goals,
    lastActiveDay: today
  });
  }
  todaySteps = stepsHistory.day5;
  todayCalories = caloriesHistory.day5;
  todayDistance = distanceHistory.day5;
  goals = JSON.parse(currentUser.goals);
  stepsGoal = goals.steps;
  caloriesGoal = goals.calories;
  distanceGoal = goals.distance;
  drawOverview();
  setScreen("TodayOverview");
}
onEvent("button3", "click", function() {
	setScreen("T&Cs");
});
onEvent("backtologin", "click", function() {
	setScreen("SignUp");
});
onEvent("SignUpButton", "click", function() {
  if (getText("Username").toLowerCase()
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .indexOf("bear") != -1 ||
    getText("Password").toLowerCase()
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .indexOf("bear") != -1 ||
    getText("Username").toLowerCase()
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .indexOf("fish") != -1 ||
    getText("Password").toLowerCase()
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .replace("-", "")
      .replace(" ", "")
      .replace("_", "")
      .replace(".", "")
      .replace("*", "")
      .replace("3", "e")
      .replace("4", "a")
      .replace("@", "a")
      .replace("1", "i")
      .indexOf("fish") != -1||
      getText("Password").toLowerCase().includes("forbidden")||
      getText("Username").toLowerCase().includes("forbidden")){
    readRecords("OFFENDERS", {attemptedUsername:(getText("Username"))}, function(records) {
      if (records.length===0){
        createRecord("OFFENDERS", {attemptedUsername:(getText("Username"))}, function(record) {
          var currentID = record.id;
          updateRecord("OFFENDERS", {id:currentID, attemptedUsername:(getText("Username")), 
            attemptedPassword:(getText("Password")), 
            dateTime: new Date().toISOString()
          },
            function() {
          });
        });
      } else {
        console.log(records.length);
        showElement("signuperror");
        setProperty("signuperror", "text", "Yeah but No. You can't do that.");
      }
    });
  } else {
    readRecords("USERS", {USERNAME:(getText("Username"))}, function(records) {
      if (records.length===0){
        createRecord("USERS", {USERNAME:(getText("Username"))}, function(record) {
          var currentID = record.id;
          updateRecord("USERS", {id:currentID, PASSWORD:(getText("Password")), 
            USERNAME:(getText("Username")), 
            stepsHistory:JSON.stringify({day1:0,day2:0,day3:0,day4:0, day5:0}), 
            caloriesHistory:JSON.stringify({day1:0,day2:0,day3:0,day4:0, day5:0}), 
            distanceHistory:JSON.stringify({day1:0,day2:0,day3:0,day4:0, day5:0}),
            goals:JSON.stringify({steps:10000, calories:400, distance:5}),
            lastActiveDay: new Date().toISOString().split("T")[0]
          },
            function() {
            readRecords("USERS", {USERNAME:(getText("Username"))}, function(records) {
              currentUser = records[0];
            });
          });
        });
        setScreen("AddData");
      } else {
        console.log(records.length);
        showElement("signuperror");
      }
    });
  }
});
onEvent("LoginButton", "click", function() {
  console.log("Trying login");
  readRecords("USERS", {USERNAME:getText("Username")}, function(records) {
    console.log(records);
    if (records.length === 0) {
      console.log("User not found");
      return;
    }
    console.log("Stored password:", records[0].PASSWORD);
    console.log("Entered password:", getText("Password"));
    if (records[0].PASSWORD === getText("Password")) {
      console.log("Password matched");
      initialise(records);
    } else {
      console.log("Password incorrect");
    }
  });
});
function drawOverview() {
  setActiveCanvas("OverviewCanvas");
  var stepsPercentage = (todaySteps / stepsGoal) * 100;
  if (stepsPercentage > 100) {
    stepsPercentage = 100;
  }
  var caloriesPercentage = (todayCalories / caloriesGoal) * 100;
  if (caloriesPercentage > 100) {
    caloriesPercentage = 100;
  }
  var distancePercentage = (todayDistance / distanceGoal) * 100;
  if (distancePercentage > 100) {
    distancePercentage = 100;
  }
  var stepsHeight = 1.5 * stepsPercentage;
  var caloriesHeight = 1.5 * caloriesPercentage;
  var distanceHeight = 1.5 * distancePercentage;
  setStrokeColor(rgb(255, 59, 48));
  setFillColor(rgb(255, 59, 48));
  rect(0, 150-stepsHeight, 80, 1.5 * stepsPercentage);
  setStrokeColor(rgb(52, 199, 89));
  setFillColor(rgb(52, 199, 89));
  rect(80, 150-caloriesHeight, 80, 1.5 * caloriesPercentage);
  setStrokeColor(rgb(0, 122, 255));
  setFillColor(rgb(0, 122, 255));
  rect(160, 150-distanceHeight, 80, 1.5 * distancePercentage);
  setText("CaloriesShown", "Calories: " + (todayCalories + ("/" + caloriesGoal)));
  setText("DistanceShown", "Distance: " + (todayDistance + ("/" + distanceGoal)));
  setText("stepsShown", "Steps: " + (todaySteps + ("/" + stepsGoal)));
}
onEvent("Add", "click", function() {
  todaySteps += getNumber("addSteps") || 0;
  todayCalories += getNumber("addCalories") || 0;
  todayDistance += getNumber("addDistance") || 0;
  stepsHistory.day5 = todaySteps;
  caloriesHistory.day5 = todayCalories;
  distanceHistory.day5 = todayDistance;
  readRecords("USERS", {USERNAME: getText("Username")}, function(records) {
    if (records.length > 0) {
      currentUser = records[0];
      updateRecord("USERS", {
        id: currentUser.id, 
        PASSWORD: currentUser.PASSWORD, 
        USERNAME: currentUser.USERNAME, 
        stepsHistory: JSON.stringify(stepsHistory), 
        caloriesHistory: JSON.stringify(caloriesHistory), 
        distanceHistory: JSON.stringify(distanceHistory),
        goals: currentUser.goals,
        lastActiveDay: currentUser.lastActiveDay
      }, function() {
        drawOverview();
        setScreen("TodayOverview");
        setText("addSteps", "");
        setText("addCalories", "");
        setText("addDistance", "");
      });
    }
  });
});
onEvent("button1", "click", function( ) {
  setScreen("AddData");
});
onEvent("button5", "click", function( ) {
	setScreen("AddData");
});
var lastTopic = "";
var lastResult = "";
onEvent("ChatBotSend", "click", function() {
  var topic = getText("chatbotInput").toLowerCase();
  var phrases = [
    "what is",
    "what are",
    "what was",
    "what were",
    "who is",
    "who was",
    "who were",
    "where is",
    "where was",
    "where are",
    "when is",
    "when was",
    "why is",
    "why was",
    "how is",
    "how was",
    "tell me about",
    "tell me more about",
    "explain",
    "describe",
    "define",
    "give me information about",
    "give information about",
    "i want to know about",
    "i want information about",
    "can you explain",
    "can you tell me about",
    "can you describe",
    "please explain",
    "please tell me about",
    "please describe",
    "what do you know about",
    "what can you tell me about",
    "facts about",
    "information about",
    "details about",
    "history of",
    "overview of",
    "summary of",
    "meaning of",
    "purpose of",
    "uses of",
    "examples of",
    "benefits of",
    "advantages of",
    "disadvantages of",
    "pros and cons of",
    "guide to",
    "learn about",
    "teach me about",
    "help me understand",
    "could you explain",
    "would you explain",
    "could you tell me about",
    "would you tell me about"
  ];
  for (var i = 0; i < phrases.length; i++) {
    topic = topic.replace(phrases[i], "");
  }
  topic = topic.replace(/[?!.,]/g, "").trim();

  if (!topic || topic.length < 2) {
    setText("output", "Please enter a topic.");
    return;
  }
  if (topic === lastTopic) {
    setText("output", lastResult);
    return;
  }
  startWebRequest(
    "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" +
      encodeURIComponent(topic) +
      "&format=json&origin=*",
    function(status, type, content) {
      if (status === 429) {
        setText("output", "Wikipedia is temporarily limiting requests. Please try again later.");
        return;
      }
      if (status !== 200) {
        setText("output", "Error: HTTP " + status);
        return;
      }
      var searchData = JSON.parse(content);
      if (
        !searchData.query ||
        !searchData.query.search ||
        searchData.query.search.length === 0
      ) {
        setText("output", "No information found.");
        return;
      }
      var title = searchData.query.search[0].title;
      startWebRequest(
        "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=true&explaintext=true&redirects=1&titles=" +
          encodeURIComponent(title) +
          "&format=json&origin=*",
        function(status, type, content) {
          if (status === 429) {
            setText("output", "Wikipedia is temporarily limiting requests. Please try again later.");
            return;
          }
          if (status !== 200) {
            setText("output", "Error: HTTP " + status);
            return;
          }
          var data = JSON.parse(content);
          if (!data.query || !data.query.pages) {
            setText("output", "No information found.");
            return;
          }
          var pages = data.query.pages;
          for (var id in pages) {
            var page = pages[id];
            var result = page.title + "\n\n" + (page.extract && page.extract.trim() !== "" ? page.extract : "No summary available.");
            lastTopic = topic;
            lastResult = result;
            setText("output", result);
            return;
          }
          setText("output", "No information found.");
        }
      );
    }
  );
});
onEvent("button7", "click", function( ) {
	setScreen("AIBOT");
});
onEvent("button2", "click", function( ) {
	setScreen("Menu");
});
onEvent("button4", "click", function( ) {
	setScreen("Menu");
});
onEvent("button11", "click", function( ) {
	setScreen("Menu");
});
onEvent("button6", "click", function( ) {
	setScreen("History");
	drawChart("HistoryChart", "bar", [
	    	{ Day: "1", Calories: caloriesHistory.day1 },
	    	{ Day: "2", Calories: caloriesHistory.day2 }, 
	    	{ Day: "3", Calories: caloriesHistory.day3 },
	    	{ Day: "4", Calories: caloriesHistory.day4 },
	    	{ Day: "5", Calories: caloriesHistory.day5 },
	    	{ Day: "1", Steps: stepsHistory.day1 },
	    	{ Day: "2", Steps: stepsHistory.day2 }, 
	    	{ Day: "3", Steps: stepsHistory.day3 },
	    	{ Day: "4", Steps: stepsHistory.day4 },
	    	{ Day: "5", Steps: stepsHistory.day5},
	    	{ Day: "1", Distance: distanceHistory.day1 },
	    	{ Day: "2", Distance: distanceHistory.day2 }, 
	    	{ Day: "3", Distance: distanceHistory.day3 },
	    	{ Day: "4", Distance: distanceHistory.day4 },
	    	{ Day: "5", Distance: distanceHistory.day5 }
	    ]);
});
onEvent("DrawCaloriesChart", "click", function( ) {
    drawChart("HistoryChart", "bar", [
     	{ Day: "1", Calories: caloriesHistory.day1 },
     	{ Day: "2", Calories: caloriesHistory.day2 }, 
     	{ Day: "3", Calories: caloriesHistory.day3 },
     	{ Day: "4", Calories: caloriesHistory.day4 },
     	{ Day: "5", Calories: caloriesHistory.day5 },
     ]);
});
onEvent("DrawStepsChart", "click", function( ) {
    drawChart("HistoryChart", "bar", [
     	{ Day: "1", Steps: stepsHistory.day1 },
     	{ Day: "2", Steps: stepsHistory.day2 }, 
     	{ Day: "3", Steps: stepsHistory.day3 },
     	{ Day: "4", Steps: stepsHistory.day4 },
     	{ Day: "5", Steps: stepsHistory.day5 }
     ]);
});
onEvent("DrawDistanceChart", "click", function( ) {
    drawChart("HistoryChart", "bar", [
     	{ Day: "1", Distance: distanceHistory.day1 },
     	{ Day: "2", Distance: distanceHistory.day2 }, 
     	{ Day: "3", Distance: distanceHistory.day3 },
     	{ Day: "4", Distance: distanceHistory.day4 },
     	{ Day: "5", Distance: distanceHistory.day5 }
     ]);
});
onEvent("ChangeGoals", "click", function( ) {
	readRecords("USERS", {USERNAME: getText("Username")}, function(records) {
	   if (records.length > 0) {
	     currentUser = records[0];
	     goals.steps = getNumber("StepsGoal") || stepsGoal;
	     goals.distance = getNumber("DistanceGoal") || distanceGoal;
	     goals.calories = getNumber("CaloriesGoal") || caloriesGoal;
	     updateRecord("USERS", {
	       id: currentUser.id, 
	       PASSWORD: currentUser.PASSWORD, 
	       USERNAME: currentUser.USERNAME, 
	       stepsHistory: currentUser.stepsHistory, 
	       caloriesHistory: currentUser.caloriesHistory, 
	       distanceHistory: currentUser.distanceHistory,
	       goals: (JSON.stringify(goals)),
	       lastActiveDay: currentUser.lastActiveDay
	     }, function() {
	       stepsGoal = goals.steps;
	       caloriesGoal = goals.calories;
	       distanceGoal = goals.distance;
	       setScreen("TodayOverview");
	       drawOverview();
	       setText("DistanceGoal", "");
	       setText("CaloriesGoal", "");
	       setText("StepsGoal", "");
	       drawOverview();
	     });
	   }
	 });
});
onEvent("button8", "click", function( ) {
	setScreen("goalsChange");
});
onEvent("menutooverview", "click", function( ) {
  setScreen("TodayOverview");
});
