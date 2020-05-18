var Aluno = new Object();
            Aluno.RA;
            Aluno.nome;
    
        Aluno.RA = "011";
        Aluno.nome = "Fernando Batoni";

        alert("Primeiro Aluno: ")
        alert("Nome = " + Aluno.nome);
        alert("RA = " + Aluno.RA);
		
        var Aluno2 = {}
        Aluno2.RA = "024";
        Aluno2.nome = "Jacqueline Batoni"
            alert("Segundo Aluno: ")        
            alert("Nome = " + Aluno2.nome);
            alert("RA = " + Aluno2.RA);
    
            var Aluno3 = {}
            Aluno3.nome = prompt("Digite o nome do terceiro aluno:")
            Aluno3.RA = prompt("Digite o RA do terceiro aluno:")
            alert("Terceiro Aluno: ")
            alert("Nome = " + Aluno3.nome);
            alert("RA = " + Aluno3.RA);