function update_rule_from_textarea() {
    f = {};
    let rules = document.getElementById("rule").value.split("\n");
    for (let rule of rules) {
        r = rule.split(" ");
        f[r[0]] = r[1];
    }
    console.log(f);
    return f;
}