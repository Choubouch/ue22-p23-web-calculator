// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
window.addEventListener('load',
  function () {
    let list_bouttons = this.document.querySelectorAll("button")
    let entree_utilisateur = ""
    let affichage = ""
    let liste_nombres = []
    let liste_operateurs = []
    for (let bouton of list_bouttons){
        bouton.addEventListener('click', () => {
            console.log(liste_nombres)
            if(bouton.textContent == "AC"){
                entree_utilisateur = ""
                liste_nombres = []
                liste_operateurs = []
                affichage = "0"
            }
            else if(["+", "-", "÷", "×"].includes(bouton.textContent)){
                liste_nombres.push(entree_utilisateur)
                liste_operateurs.push(bouton.textContent)
                entree_utilisateur = ""
                affichage = bouton.textContent
            }
            else if(bouton.textContent == "="){
                liste_nombres.push(entree_utilisateur)
                entree_utilisateur = ""
                resultat = Number(liste_nombres[0])
                for(let i = 0; i < liste_operateurs.length ; i++){
                  if(liste_operateurs[i] == "+"){
                    resultat += Number(liste_nombres[i+1])
                  }
                  else if(liste_operateurs[i] == "-"){
                    resultat -= Number(liste_nombres[i+1])
                  }
                  else if(liste_operateurs[i] == "×"){
                    resultat *= Number(liste_nombres[i+1])
                  }
                  else if(liste_operateurs[i] == "÷"){
                    resultat /= Number(liste_nombres[i+1])
                  }
                  
                }
                if(isNaN(resultat)){
                  entree_utilisateur = ""
                  liste_nombres = []
                  liste_operateurs = []
                  affichage = "Erreur de saisie"
                 }
                else{
                  affichage = resultat
                }
                liste_nombres = []
                liste_operateurs = []
            }
            else{
              entree_utilisateur = entree_utilisateur + bouton.textContent
              affichage = entree_utilisateur
            }
            
            this.document.querySelector(".calculator__display").textContent = affichage
            })
    }
    

  })