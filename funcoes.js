var list=[];

function desenha_lista(list){

	var n = list.length;

	$("#list").html("");

	for(var i=0; i<n; i++)
		$("#list").append($("<li></li>").html(list[i]));

		$("#list li").on("click",function(event){

			$("#list-done").append($("<li></li>").html($(this).text()));
			
			$(this).remove();

			list.length--;
		})
		return(list);
       
        // Possibilidade para os itens clicados sumirem:
        // $(document).ready(function(){
        //     $("li").click(function(){
        //         $(this).hide();
        //     });
        //     });
}

$(document).ready(function(ev){

  $("#list-form").on("submit",function(ev){
		ev.preventDefault();
		var item;

		list.push($("#item").val());
		$("#item").val("");

		desenha_lista(list);

		// Impede que o formulario seja submetido e a pagina recarregue.
		return(false);
	});
});
