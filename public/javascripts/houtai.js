// 按钮操作
 

 // $(document).ready(function() {
    
     
    // refreshList();
    // function refreshList() {
    //     $.ajax({
    //         url:'/gethg',
    //         type:'get',
    //         success:function(data){
    //             // console.log(data);
    //             alert(1);


    //         },
    //         error:function(err){
    //             console.log(err);
    //         }
    //     })
       

    // }

    $('.ul1').click(function(){
        var tit=$(this).find('li').eq(1).html();
        var time=$(this).find('li').eq(2).html();
        $('#newsTitle').val(tit);
        $('#newsTime').val(time);
    })


    $("#btn1").click(function(e){
        // alert(1);
        e.preventDefault();
        var newsImg = $("#newsImg").val();
        var newsTitle = $("#newsTitle").val();
        var newsTime = $("#newsTime").val();
        var newstype=$('#newstype').val();

        var json  ={
            newsImg:newsImg,
            newsTitle:newsTitle,
            newsTime:newsTime,
            newstype:newstype
        }

        $.ajax({

            url:'/inserUser',
            type:'post',
            data:json,
            success:function(data){
                location.reload();
                if (data.state === 'ok') {

                    $("#newsImg").val('');
                    $("#newsTitle").val('');
                    $("#newsTime").val('');
                    $("#newstype").val('');

                    alert(data.message);
                  // refreshList();
                  
                }
                  
            },
            error:function(err){
                console.log(err);
            }

        })
      
       
    })

     $('.ul1').on('click','#btn2',function(e){
        // alert(1);
              e.stopPropagation();
             newsid= $(this).parent().prevAll().eq(2).html();
              console.log(newsid);
         // var newsImg = $("#newsImg").val();
        // var newsTitle = $("#newsTitle").val();
        // var newsTime = $("#newsTime").val();

        var json  ={
            newsImg:$("#newsImg").val(),
            newsTitle:$("#newsTitle").val(),
            newsTime:$("#newsTime").val(),
            newsid:newsid
        }

        $.ajax({

            url:'/changeUser',
            type:'post',
            data:json,
            success:function(data){
                
                    $("#newsImg").val('');
                    $("#newsTitle").val('');
                    $("#newsTime").val('');

                    alert(data.message);
                  // refreshList();
                  
                
                location.reload();
            },
            error:function(err){
                console.log(err);
            }

        
        })

    })



     var newsid;

    $('.ul1').on('click','#delete',function(e){
        e.stopPropagation();
       newsid= $(this).parent().prevAll().eq(2).html();
        console.log(newsid);
       $('#myModal').modal('show');

        
        // console.log(this);
        // console.log(newsid);
        // var json  ={
        //     newsid:newsid
          
        // }
        

    })

    $("#delete1").click(function(){
        console.log(newsid);

        $.ajax({
            url:'/deleteList',
            type:'post',
            data:{newsid:newsid},
            success:function(data){
                alert(data.message);
                // refreshList();
                location.reload();
            },
            error:function(err){
                console.log(err);
            }

        })
    })

     
// });