//function print(x) {process.stdout.write(x);}
//function reverse(s) { return s.split('').reverse().join('');} 
function step(feed,f) {
    for (const [k,v] of f) if ( feed.indexOf(k) > -1 ) {feed = feed.replace(k,v); return feed;}
    return feed;
}

function halted(tape) {
    for (const [k,v] of f) if ( tape.indexOf(k) > -1 ) return false;
    return true;
}

function resetTape() {
    tape = tape_orig;
}
function plot_tape() {
    document.getElementById("tape").value = tape;
}
function update_tape() {
    tape = step(tape,f);
    plot_tape();
    display_rule();
    if (halted(tape)) stop();
}

function update_tape_from_textarea() {
    tape = document.getElementById("tape").value;
    console.log(tape);
    console.log(document.getElementById("tape").value );
}

