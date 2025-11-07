let interval;
let num_speeds = 7;
let speed_index = 4;
let speeds = [10,25,50,100,250,500,750];
let num_fonts = 5;
let fonts = ["150px Courier New","150px Arial","150px Georgia","150px Garamond","150px Tahoma"];
let font_index = 0;
let tape_orig = "f|||||||";
let tape = tape_orig;
let mode = "start";
let delay = 500;
let fast_delay = 20;
let slow_delay = 500;
let run_limit = 100;
document.getElementById('tape').style.backgroundColor = 'white';
document.getElementById('find_strings').style.backgroundColor = 'white';
document.getElementById('replace_strings').style.backgroundColor = 'white';
let f = new Map;
f.set("f|","||f");
f.set("f", "h");
f.set("|h","h|");






