function print_rule() {
    s = "";
    for (const [k,v] of f) {
        s += k + " \u27F6 " + v + "\n";
    }
    download_string(s);
}

function print_num_test_summary() {
    f = accept_rule();
    display_rule();
    let s = "TEST ( SUMMARY )\n\n";
    s += "program : \n\n";
    for (const [k,v] of f) {
        s += k + " \u27F6 " + v + "\n";
    }
    s += "\n\ntest :\n\n";
    for (let i = 0; i < 10; i++) s += calc_num_summary(i) + "\n";
    download_string(s);
}
function print_num_test_detail() {
    f = accept_rule();
    display_rule();
    let s = "TEST ( DETAIL ) \n\n";
    s += "program : \n\n";
    for (const [k,v] of f) {
        s += k + " \u27F6 " + v + "\n";
    }
    s += "\n\ntest :\n\n";
    for (let i = 0; i < 10; i++) s +=calc_num_detail(i) + "\n";
    download_string(s);
}

function calc_num_detail(n) {
    let symbols = "h|";
    let count = 0;
    let last = "";
    calc_tape = 'f' + '|'.repeat(n);
    const occ = new RegExp('|', 'g');
    const form = new RegExp(`^[${symbols}]+$`, 'i'); 
 
    let s = calc_tape + "\n";
    for (let i = 0; i < run_limit; i++) {
        last = calc_tape;
        calc_tape = step(calc_tape,f);
        s += calc_tape + "\n";
        if (halted(calc_tape) && form.test(calc_tape)) {
            count = calc_tape.length - 1;
            s += `f(${n}) = ${count}\n`;
            return s;
        }
        if (last == calc_tape) {
            s += " found loop / machine jammed";
            return s;
        }
    }
    s += `   did not halt in time ( exceeded run_limit = ${run_limit} \n`;
    return s;
}
function calc_num_summary(n) {
    let symbols = "h|";
    let count = 0;
    calc_tape = 'f' + '|'.repeat(n);
    
    const form = new RegExp(`^[${symbols}]+$`, 'i'); 
 
    let s = calc_tape;
    for (let i = 0; i < run_limit; i++) {
        calc_tape = step(calc_tape,f);
        if (halted(calc_tape) && form.test(calc_tape)) {
            count = calc_tape.length - 1;
            s += " \u27F6\u27F6 " + calc_tape + "\n";
            s += `f(${n}) = ${count}\n`;
            return s;
        }

    }
     s += `    did not halt in time ( exceeded run_limit = ${run_limit})\n`;
    return s;
}

function test_summary() {

}