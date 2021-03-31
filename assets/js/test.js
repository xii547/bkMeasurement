$(function () {
    $('.plus-btn').on('click',function(){
        var qty = $(this).closest('div').find('.qty_input');
        var currentVal = parseFloat($(qty).val());
        if (!isNaN(currentVal)) {
            $(qty).val((currentVal + 0.25));
        }
    });
    $('.minus-btn').on('click',function(){
        var qty = $(this).closest('div').find('.qty_input');
        var currentVal = parseFloat($(qty).val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $(qty).val((currentVal - 0.25));
        }
    });
});


 $('.measureStandard').on('click',function(){

    var v_cm=$(this).closest('div').find('.qty_input').val();
    var v_in=v_cm*0.39370079;
    $(this).closest('div').find(".qty_input").val(v_in);

});


   $('.measureMetric').on('click',function(){

    var v_in=$(this).closest('div').find('.qty_input').val();
    var v_cm=v_in*2.54;
    $(this).closest('div').find(".qty_input").val(v_cm);

});