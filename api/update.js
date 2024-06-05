
const searchParams = new URLSearchParams(window.location.search);

console.log(searchParams.get("id"));

const id = searchParams.get("id");

console.log(id);

function edit(id) {
    $.ajax({
      url: `https://localhost:7147/api/Country/${id}`,
      type: "GET",
      contentType: "application/json;charset=UTF-8",
      dataType: "json",
      success: function (result) {
        console.log(result);
        $("#name").val(result.name);
        $("#sname").val(result.shortName);
        $("#code").val(result.countryCode);
      },
      error: function () {
        alert("Data Not Found !!");
      },
    });
  }
  if (id) {
    edit(id);
  }

function updateSource() {
    var input = {
      Id: id,
      Name: $("#name").val(),
      shortName: $("#sname").val(),
      CountryCode: $("#code").val()
     
    };
   
    $.ajax({
      url: "https://localhost:7147/api/Country/" +id,
      type: "PUT",
      data: JSON.stringify(input),
      contentType: "application/json",

      success: function (result) {  
        alert("done")     
     if(result.status =="true")
        {
            alert(result.msg);
            window.location.assign("/Table-page.html");
        }
      },
      error: function (msg) {},
    });
  }

  updateSource()
