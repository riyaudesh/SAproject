

$('#add_user').submit(function(event){
    alert('Data inserted Successfully!');
})

$('#update_user').submit(function(event){
    event.preventDefault();
    
     var unindexed_array=$(this).serializeArray();
     var userdata={}

     $.map(unindexed_array,function(n,i){
         userdata[n['name']]=n['value']
     })

    console.log(userdata);

    var request={
        "url":'http://localhost:4000/api/users/${data.id}',
        "method":"PUT",
        "data":userdata
    }
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully");
    })
})

if(window.location.pathname=="/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")

        var request ={
            "url":"http://localhost:4000/api/users/${id}",
            "method":"DELETE"
        }
        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data deleted successfully");
                location.reload()
            })
        }
    })
}
exports.delete = (req, res) =>{
    const id = req.params.id;

}


