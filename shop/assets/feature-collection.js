var form = $('form[action="/cart/add"]');

$(form)
  .find("[data-variant-id]")
  .on("click", function () {
    var id = $(this).data("variant-id");
    $(form).find('input[name="id"]').val(id);
  });

onclick =
  "$(this).parent().parent().find(input[name='id']).val($(this).data('variant-id'))";