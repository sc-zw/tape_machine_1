function load_rule() {
    f = accept_rule();
    display_rule();
}
function accept_rule() {
    //old_f = f;
    const new_f = new Map;
    let find_strings =  document.getElementById("find_strings").value.split("\n").map(s => s.trim());
    let replace_strings =  document.getElementById("replace_strings").value.split("\n").map(s => s.trim());
    //if ( find_strings.length != replace_strings.length ) { f = old_f; returnl}

    for (let i = 0; i < find_strings.length; i++) {
        new_f.set(find_strings[i], replace_strings[i]);
    }
    //console.log(f);
    return new_f;
}
function display_rule() {
    let find_string = "";
    let replace_string = "";
    for (const [k,v] of f) {
        find_string += k + "\n";
        replace_string += v + "\n";

    }
    document.getElementById("find_strings").value =  find_string.trimEnd();
    document.getElementById("replace_strings").value = replace_string.trimEnd();
}

function load_next_tape() {
    
    tape = document.getElementById("tape").value;
    console.log(tape);
}
function start() {
    f = accept_rule();
    display_rule();
    document.getElementById('tape').style.backgroundColor = 'lightblue';
    document.getElementById('find_strings').style.backgroundColor = 'lightblue';
    document.getElementById('replace_strings').style.backgroundColor = 'lightblue';
    tape = document.getElementById("tape").value;
    interval = setInterval(update_tape, delay);
}
function stop() {
    clearInterval(interval);
    document.getElementById('tape').style.backgroundColor = 'white';
    document.getElementById('find_strings').style.backgroundColor = 'white';
    document.getElementById('replace_strings').style.backgroundColor = 'white';  
}
function step_one() {
    tape = document.getElementById("tape").value;
    f = accept_rule();
    display_rule();
    tape = step(tape,f);
    plot_tape();
}

function fast() {
    delay = fast_delay;
    start();
}
function slow() {
    delay = slow_delay;
    start();
}