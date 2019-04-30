let btnGetFilms, btnGetGender, btnGetAmiibo, btnGetHello;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  // setup a button (requires p5.dom library, see index.html)
  btnGetFilms = createButton('Get Films');
  btnGetFilms.position(60, 90);
  btnGetFilms.mousePressed(getFilms);

  btnGetGender = createButton('Get Gender From Name');
  btnGetGender.position(60, 180);
  btnGetGender.mousePressed(getGenderFromName);

  btnGetAmiibo = createButton('Get Amiibo');
  btnGetAmiibo.position(60, 270);
  btnGetAmiibo.mousePressed(getAmiibo);

  btnGetHello = createButton('Get Hello');
  btnGetHello.position(60, 360);
  btnGetHello.mousePressed(getHello);

  textAlign(CENTER);
}

// --------------------------------------------------------
function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// --------------------------------------------------------
function setupTitle() {
  fill(0);
  textAlign(LEFT);
  textSize(22);
  let titleText = "Exercise 8: Other APIs";
  text(titleText, 60, 60);
}

// --------------------------------------------------------
function getFilms() {
  httpGet('/getFilmData', function(response) {
    console.log(JSON.parse(response));
  });
}

// --------------------------------------------------------
function getGenderFromName() {
  let name = "alex";
  httpGet('/checkName/' + name, function(response) {
    console.log(JSON.parse(response));
  });
}

// --------------------------------------------------------
function getAmiibo() {
  httpGet('/getAmiiboData', function(response) {
    console.log(JSON.parse(response));
  });
}

// --------------------------------------------------------
function getHello() {
  httpGet('/getHelloInLang', function(response) {
    console.log(JSON.parse(response));
  });
}

// --------------------------------------------------------
function draw() {
  background(243, 214, 255);
}