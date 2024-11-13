import './polyfills.server.mjs';
import{B as j,F as q,G as z,J as h,K as k,a as p,b as _,c,d as I,e as m,f as o,g as t,h as r,i as C,j as s,k as d,l as H,m as l,n as u,s as D,v as E,x as T,y as F}from"./chunk-2MXQSXPF.mjs";var v=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-menu-bar"]],standalone:!0,features:[l],decls:11,vars:0,consts:[[1,"container__menu-bar"],["href","https://www.konami.com/en/"],["href","https://www.youtube.com/@konami"],["href","https://www.linkedin.com/in/\xE9der-de-lima-64b70626a"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"ul")(2,"li")(3,"a",1),s(4,"Produtora"),t()(),o(5,"li")(6,"a",2),s(7,"Youtube"),t()(),o(8,"li")(9,"a",3),s(10,"Dev do blog"),t()()()())},styles:[".container__menu-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row}.container__menu-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:30px;list-style-type:none}"]})};var M=class n{title="angular-blog-jogos";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-root"]],standalone:!0,features:[l],decls:3,vars:0,template:function(e,i){e&1&&(o(0,"header"),r(1,"app-menu-bar"),t(),r(2,"router-outlet"))},dependencies:[z,v],styles:["header[_ngcontent-%COMP%]{margin-top:15px;display:flex;justify-content:center}"]})};var b=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-menu-title"]],standalone:!0,features:[l],decls:3,vars:0,consts:[[1,"container__menu-title"],[1,"titulo"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"h1",1),s(2,"BLOG SILENT HILL"),t()())},styles:[".container__menu-title[_ngcontent-%COMP%]{color:#fff}.container__menu-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-size:135px;margin-top:30px}","@media screen and (max-width:600px){.container__menu-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px;text-align:center}}@media screen and (max-height:600px){.container__menu-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px}}"]})};var x=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-footer"]],standalone:!0,features:[l],decls:3,vars:0,consts:[[1,"footer__text"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"footer"),s(2,"Fonte: Wikip\xE9dia (2024)"),t()())},styles:[".footer__text[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{font-size:12px;text-align:center}"]})};var w=n=>["content",n],y=class n{fotoCapa="";cardTitulo="";srcDescricao="";Id="0";constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-big-card"]],inputs:{fotoCapa:"fotoCapa",cardTitulo:"cardTitulo",srcDescricao:"srcDescricao",Id:"Id"},standalone:!0,features:[l],decls:13,vars:12,consts:[[1,"container__big-card"],[1,"big-card__img"],[3,"routerLink"],["alt","","height","240px",3,"src"],[1,"big-card__titulo"],[1,"big-card__descricao"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1)(2,"a",2),r(3,"img",3),t()(),o(4,"div",4)(5,"h1")(6,"a",2),s(7),t()()(),o(8,"div",5)(9,"p")(10,"a",2),s(11),t()()(),r(12,"app-footer"),t()),e&2&&(c(2),m("routerLink",u(6,w,i.Id)),c(),C("src",i.fotoCapa,_),c(3),m("routerLink",u(8,w,i.Id)),c(),d(i.cardTitulo),c(3),m("routerLink",u(10,w,i.Id)),c(),H(" ",i.srcDescricao," "))},dependencies:[h,x],styles:[".container__big-card[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;width:400px;height:600px;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.big-card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.big-card__titulo[_ngcontent-%COMP%]{margin-top:15px;font-size:20px}.big-card__descricao[_ngcontent-%COMP%]{margin-top:20px}.big-card__descricao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:gray;font-size:24px}.big-card__descricao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify}","@media screen and (max-width:600px){.big-card__descricao[_ngcontent-%COMP%]{width:350px}.big-card__descricao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:22px}.big-card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:338px}.container__big-card[_ngcontent-%COMP%]{height:100%}}"]})};var N=n=>["content",n],O=class n{fotoCover="";cardTitulo="";Id="0";constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-small-card"]],inputs:{fotoCover:"fotoCover",cardTitulo:"cardTitulo",Id:"Id"},standalone:!0,features:[l],decls:11,vars:8,consts:[[1,"container__small-card"],[1,"container__small-card-content"],[3,"routerLink"],[1,"small-card__img"],["alt","","height","",3,"src"],[1,"small-card__titulo"],[1,"container__small-card__separador"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1)(2,"a",2)(3,"div",3),r(4,"img",4),t()(),o(5,"div",5)(6,"h1")(7,"a",2),s(8),t()()()(),o(9,"div",6),r(10,"hr"),t()()),e&2&&(c(2),m("routerLink",u(4,N,i.Id)),c(2),C("src",i.fotoCover,_),c(3),m("routerLink",u(6,N,i.Id)),c(),d(i.cardTitulo))},dependencies:[h],styles:[".container__small-card[_ngcontent-%COMP%]{width:700px;margin-bottom:10px}.container__small-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:row}.small-card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;min-width:200px;margin-right:20px}.small-card__titulo[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.container__small-card__separador[_ngcontent-%COMP%]{margin-top:10px}","@media screen and (max-width:600px){.container__small-card[_ngcontent-%COMP%]{width:350px}}"]})};var P=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-home"]],standalone:!0,features:[l],decls:9,vars:0,consts:[[1,"container__artigos"],[1,"artigos__principal"],["id","1","fotoCapa","https://th.bing.com/th/id/OIP.bKUsWQ27Ec4VWyzuSiferQHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain","cardTitulo","Siillent Hill \xE9 um jogo de terror cl\xE1ssico","srcDescricao","Silent Hill, \xE9 uma s\xE9rie japonesa de jogos eletr\xF4nicos do g\xEAnero survival horror produzida e publicada pela Konami. Sua primeira estreia foi no jogo hom\xF4nimo para PlayStation  em fevereiro de 1999."],[1,"artigos__outros"],["Id","1","fotoCover","https://pepper2play.com/wp-content/uploads/2022/11/SH1_flat_crop.png","cardTitulo","Silent Hill 1 - O inicio."],["Id","2","fotoCover","https://images.stopgame.ru/games/logos/2602/c896x896/NRyhv4s97TSTjjddsc_bOg/silent_hill_2-square_1.jpg","cardTitulo","Silent hill 2 - Continua a hist\xF3ria."],["Id","3","fotoCover","https://retroemulators.com/emulators/2758424a5e91ad30585c606782bd6b16.jpg","cardTitulo","Silent hill 3 - Terror no parque e shopping."],["Id","4","fotoCover","https://assets-prd.ignimgs.com/2022/01/28/silent-hill-4-button-crop-1643359468651.jpg","cardTitulo","Silent hill 4 - N\xE3o consigo sair do apartamento."]],template:function(e,i){e&1&&(r(0,"app-menu-title"),o(1,"div",0)(2,"div",1),r(3,"app-big-card",2),t(),o(4,"div",3),r(5,"app-small-card",4)(6,"app-small-card",5)(7,"app-small-card",6)(8,"app-small-card",7),t()())},dependencies:[b,y,O],styles:[".container__artigos[_ngcontent-%COMP%]{margin-top:50px;display:flex;flex-direction:row;justify-content:center}","@media screen and (max-width:600px){.container__artigos[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:20px}.artigos__outros[_ngcontent-%COMP%]{font-size:8px;margin-top:50px;margin-left:20px}}@media screen and (max-height:600px){.container__artigos[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:20px}.artigos__outros[_ngcontent-%COMP%]{font-size:8px;margin-top:80px;margin-left:20px}}"]})};var A=[{id:0,title:"Siillent Hill \xE9 um jogo de terror cl\xE1ssico",description:"Silent Hill, \xE9 uma s\xE9rie japonesa de jogos eletr\xF4nicos do g\xEAnero survival horror produzida e publicada pela Konami. Sua primeira estreia foi no jogo hom\xF4nimo para PlayStation em fevereiro de 1999.",photoCover:"https://th.bing.com/th/id/OIP.bKUsWQ27Ec4VWyzuSiferQHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain"},{id:1,title:"Protagonista do Silent hill 1 Harry Manson",description:"Sete anos atr\xE1s, Harry Mason e sua esposa encontraram um beb\xEA numa estrada e o adotaram como se fosse sua filha. Eles deram o nome de Cheryl a ela. Mesmo depois que sua esposa faleceu, Harry continuou a amar Cheryl como sua pr\xF3pria filha. O jogo segue Harry Mason enquanto ele procura por sua filha na cidade americana fict\xEDcia de Silent Hill. No decorrer do enredo, Harry descobre a verdade sobre a cidade e um culto religioso que deseja realizar um ritual para trazer uma divindade \xE0 terra. ",photoCover:"https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/Harry-Mason-waking-up-in-Silent-Hill.jpg?q=50&fit=crop&w=825&dpr=1.5"},{id:2,title:"Silent hill 2",description:"A hist\xF3ria \xE9 focada em James Sunderland, um vi\xFAvo que viaja para a cidade de Silent Hill depois de receber uma carta de sua falecida esposa lhe informando que est\xE1 a sua espera. Assim que James entra em Silent Hill, ele imediatamente percebe que essa n\xE3o \xE9 a mesma bela cidade na qual ele e Mary passavam as suas f\xE9rias. Sons estranhos s\xE3o ouvidos no caminho, uma n\xE9voa intermin\xE1vel dificulta a vis\xE3o, a cidade inteira parece ter sido abandonada h\xE1 anos.",photoCover:"https://i.pinimg.com/736x/1b/8d/16/1b8d16162fd074df9cb409bc6f4f20d9.jpg"},{id:3,title:"Sequ\xEAncia direta de Silent Hill 3",description:"Ap\xF3s jogar durante um curto per\xEDodo de tempo num sonho da protagonista no parque de divers\xF5es de Silent Hill, o jogador \xE9 apresentado \xE0 Heather Mason no restaurante Happy Burger, que localiza-se dentro de um shopping.  Em seu caminho, Heather encontra uma sacerdotisa do culto de Silent Hill, que se identifica como Claudia Wolf, dizendo a Heather para lembrar-se dela, e de sua verdadeira forma. Ela menciona tamb\xE9m que est\xE1 l\xE1 para lider\xE1-los ao Para\xEDso com m\xE3os manchadas de sangue.",photoCover:"https://primagames.com/wp-content/uploads/2023/05/silent-hill-3-feature.png"},{id:4,title:"Fora da cidade de Silent Hill",description:"Diferente dos lan\xE7amentos anteriores, que aconteciam primariamente na cidade perturbada de Silent Hill, este jogo se passa na cidade fict\xEDcia de Ashfield, e \xE9 focado na tentativa do personagem Henry Townshend de fugir de seu trancafiado apartamento. Ele explora uma s\xE9rie de mundos sobrenaturais e se encontra em conflito com um serial killer n\xE3o morto.",photoCover:"https://th.bing.com/th/id/OIP.6hfeqTohzxudL8lm8jqxbwHaFk?rs=1&pid=ImgDetMain"}];var S=class n{constructor(a){this.route=a}photoCover="https://primagames.com/wp-content/uploads/2023/05/silent-hill-3-feature.png";contentTitle="Heather Mason";contentDescription="Protagonista do jogo Silent Hill 3, junto com seu pai, ambos fugindo de for\xE7as que ela desconhece. \xC0 v\xE9spera de seu anivers\xE1rio de 18 anos, Heather come\xE7a a ter pesadelos e seu pai desaparece, e ela acaba descobrindo que n\xE3o \xE9 quem pensa que \xE9.";id="0";ngOnInit(){this.route.paramMap.subscribe(a=>this.id=a.get("id")),this.setValuesToComponent(this.id)}setValuesToComponent(a){let e=A.filter(i=>i.id.toString()==a)[0];this.contentTitle=e.title,this.contentDescription=e.description,this.photoCover=e.photoCover}static \u0275fac=function(e){return new(e||n)(I(q))};static \u0275cmp=p({type:n,selectors:[["app-content"]],standalone:!0,features:[l],decls:13,vars:3,consts:[[1,"container__content"],[1,"content__cover"],["alt","",3,"src"],[1,"content__title"],[1,"content__description"],["routerLink",""]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1),r(2,"img",2),t(),o(3,"div",3)(4,"h1"),s(5),t(),r(6,"hr"),t(),o(7,"div",4)(8,"p"),s(9),t(),o(10,"a",5),s(11," << VOLTAR "),t()(),r(12,"app-footer"),t()),e&2&&(c(2),C("src",i.photoCover,_),c(3),d(i.contentTitle),c(4),d(i.contentDescription))},dependencies:[h,x],styles:[".container__content[_ngcontent-%COMP%]{width:100%;height:100vh;margin-top:20px;display:flex;flex-direction:column;align-items:center}.content__cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:5px solid grey;border-radius:10px;width:500px;min-width:500px;height:300px}.content__description[_ngcontent-%COMP%]{font-size:22px;width:500PX;margin-top:15px}.content__description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify;color:gray}","@media screen and (max-width:600px){.container__content[_ngcontent-%COMP%]{width:350px}.container__content[_ngcontent-%COMP%]{margin-left:30px}.content__description[_ngcontent-%COMP%]{width:350px;padding-bottom:50px;margin-right:30px}.content__description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:22px;text-align:justify}.content__cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:300px;min-width:100px;height:280px}}"]})};var L=[{path:"",component:P},{path:"content/:id",component:S}];var R={providers:[D({eventCoalescing:!0}),k(L),F()]};var K={providers:[j()]},B=E(R,K);var W=()=>T(M,B),Fe=W;export{Fe as a};