     
var guardar=[]
var res = document.querySelector("div#entrar")
 function entrar(){
    var dado =[document.getElementById('id01'),document.getElementById('senha')]
    var dd1=String(dado[0].value)
    var dd2=String(dado[1].value)     
       if(dd1=='projeto@gmail.com' && dd2=='projeto1'){
           alert('SEJA BEM VINDO')
        }else{
           alert('DADOS INCORRETOS TENTE NOVAMENTE!')
        }
   }function lembrar(){
    guardar.push(document.getElementById('id01'),document.getElementById('senha'))
}