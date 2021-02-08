function type_writer() {
    function add_char() {
        element.innerHTML += char_to_add;
        if (current_index_c === word_to_add.length-1) {
            if (current_index_w === words.length-1){
                current_index_w = 0;
                word_to_add = words[0];
                current_index_c = 0;
                char_to_add = word_to_add[0];
                setTimeout(rm_char, 2000);
            }
            else {
                current_index_w ++;
                word_to_add = words[current_index_w];
                current_index_c = 0;
                char_to_add = word_to_add[0];
                setTimeout(rm_char, 2000);
            }
        }
        else {
            current_index_c ++;
            char_to_add = word_to_add[current_index_c];
            setTimeout(add_char, 300);
        }
    }
    function rm_char(){
        element.innerHTML = word_removing.slice(0, index_char_removing);
        if (Math.abs(index_char_removing) === word_removing.length) {
            if (index_word_removing === words.length-1) {
                index_word_removing = 0;
                word_removing = words[0];
                index_char_removing = -1;
                setTimeout(add_char, 1000);
            }
            else {
                index_word_removing ++;
                word_removing = words[index_word_removing];
                index_char_removing = -1;
                setTimeout(add_char, 1000);
            }
        }
        else {
            index_char_removing --;
            setTimeout(rm_char, 100)
        }
    }
    var words = ["Tanish Yadav", "A Programmer", "A Student", "Awesome"];
    var element = document.getElementById("words");
    var cursor = document.getElementById("cursor");
    var current_index_w = 0;
    var word_to_add = words[0];
    var current_index_c = 0;
    var char_to_add = word_to_add[0];
    var index_char_removing = -1;
    var index_word_removing = 0;
    var word_removing = words[0];
    element.innerHTML = "";
    cursor.style.visibility = "visible";
    setTimeout(add_char, 1000);
}
window.onload = type_writer;
