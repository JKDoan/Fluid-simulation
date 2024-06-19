function runPy() {
    $.ajax({
        type:'POST',
        url:'test.py',
        success: function(data) {                                                     
            console.log(data)
        };
    });
}