function pesquisar(){
    console.log("clicou");

    let section  = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById ("campo-pesquisa").value
    console.log(campoPesquisa)

    console.log(atleta);
    console.log(section);
    
    let resultados = "";
    let titulo ="";
    let descricao ="";
    let tags ="";

    if(campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
}

campoPesquisa = campoPesquisa.toLowerCase()

    for(let dado of atleta){
        titulo=dado.titulo.toLowerCase()
        descricao=dado.descricao.toLowerCase()
        tags=dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
            <h2> 
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
                <p><a href="${dado.link_Instagram}" target="_blank">-Instagram</a></p>
                <p><a href="${dado.link_Transfer}" target="_blank">-Transfermarkt</a></p>
                <p><a href="${dado.link_Wiki}" target="_blank">-Wikipedia</a></p>
        
        </div>
        `;

        }
        
        console.log(dado.titulo.includes(campoPesquisa))
        
}
    section.innerHTML = resultados;
    if(!resultados){

        resultados ="<p>Nada foi encontrado</p>"


    }


}



