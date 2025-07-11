const HTMLElement = document.getElementById( 'ApplicationContainer' );

window.onload = function() {

    const button = document.getElementById("copy.to.clipboard");
    const input = document.getElementById("json.input");
    const output = document.getElementById("json.output");
    button.onclick = (event) => {
        try {
            const json = JSON.parse(input.value);
            const result = bbb(json);
            output.value = result;
            navigator.clipboard.writeText(result);
        } catch (error) {}
    }

};

let bbb = (obj) => {
    let r = "";
    obj.items.map((a) => {
        let b = JSON.stringify(a).replaceAll("\n", "");
        b = b.replaceAll("  ", "");
        if (r.length > 0) r += "\n";
        r += b;
    });
    return r;
}




