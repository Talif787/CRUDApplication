const baseUrl = process.env.baseURL || "http://localhost:9090";
$("#update_user").submit(function (event) {
  event.preventDefault();
  var unindexed_array = $(this).serializeArray();
  // console.log(unindexed_array);
  var data = {};
  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  console.log(data);

  var request = {
    url: `${baseUrl}/api/user/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    console.log(response);
    window.location = `${baseUrl}`;
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `${baseUrl}/api/user/${id}`,
      method: "DELETE",
    };

    if (confirm("Are you sure you want to delete the record?")) {
      $.ajax(request).done(function (response) {
        console.log(response);
        location.reload();
      });
    }
  });
}
