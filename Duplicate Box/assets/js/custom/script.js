$(document).ready(function(){
    $("body")
        .on("change", "#act1_select", activityOne)
        .on("change", "#act2_select", activityTwo)
        .on("click", ".delete_btn", deleteButton)
        .on("change", "#act3_select", activityThree)
});

function activityOne(){
    let selected_value  = $("#act1_select option:selected").val();
    $('#act1_list').empty();

    for (var count_start = 1; count_start <= selected_value; count_start++){
            $("#act1_list").removeClass("no_data");

            let box_duplicate = $(".act1_item:first").clone();
            box_duplicate.removeClass("clone_item");
            $("#act1_list").append(box_duplicate);
        }
};

function activityTwo(){
    let selected_value  = $("#act2_select option:selected").val();
    $("#act2_list").empty();

    for (var count_start = 1; count_start <= selected_value; count_start++){
            $("#act2_list").removeClass("no_data");

            let box_duplicate = $(".act2_item:first").clone();
            box_duplicate.removeClass("clone_item");
            $("#act2_list").append(box_duplicate);
        }
};

function deleteButton(){
    $(this).closest("li").remove();  
    let box_count = $("#act2_list li").length;
    $("#act2_select").find("option[value= " + box_count + "]").prop("selected", true);
};

function activityThree(){
    let selected_value  = $("#act3_select option:selected").val();
    let count_start;
    $(".byone").addClass("add_height_on_list");
    for(count_start=1; count_start <= 10; count_start++){ 
        let result = count_start * selected_value;
        // let result_nine = count_start * 9;
        $(".byone").append("<li> " + result + "</li>");
    }
};

// pag pili ng selected value mag for l