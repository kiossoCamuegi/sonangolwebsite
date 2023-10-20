 

 function togglenavbar(){
     let main = document.querySelectorAll(".responsive-navbar");
     if(main.length >= 1){
       const navbar = main[0];
       let buttons = document.querySelectorAll(".toggle-navbar");
       if (buttons.length >= 1) {
           buttons.forEach(btn =>{
               btn.onclick = ()=>{
                   navbar.classList.toggle("active");
               }
           });
       }  
     }
 }
 
 function TABS(tab,tab_header,tab_body, header_element, body_element, active){
     let main = document.querySelectorAll(tab);
     if(main.length >= 1){
        const tab = main[0];
        const header = tab.querySelector(tab_header);
        const bodytab = tab.querySelector(tab_body);
        let btn = header.querySelectorAll(header_element);
        let container = bodytab.querySelectorAll(body_element);
        for(let i = 0; i < btn.length; i++){
            btn[i].onclick = ()=>{
                header.querySelector("."+active).classList.remove(active);
                btn[i].classList.add(active);
                bodytab.querySelector("."+active).classList.remove(active);
                container[i].classList.add(active);
            }
        } 
     }
 }


function playvideointro(){
    let player = document.querySelectorAll(".play-box");
    if (player.length >= 1) {
        let btn = player[0];
        let modal = document.querySelectorAll(".modal-player");
        if(modal.length >= 1){
            const box = modal[0];
            btn.onclick = ()=>{
                box.classList.toggle("showmodal");
            }
            box.querySelector(".modal-player-close").onclick = ()=>{
                box.classList.toggle("showmodal");
            }
        }
    }
}




function galleryEvents(){
   let gallery = document.querySelectorAll(".gallery");
   if(gallery.length >= 1){
    let box = gallery[0].querySelectorAll(".box");
    for (let item of box){
        item.onclick = ()=>{
            let extension = item.getAttribute("extension");
            let source = item.getAttribute("data-source");
            if(extension == "image" || source != null){ 
                //call image modal
                console.log("just a image");
            }else if(extension != "image" || source != null){ 
                 //call video modal
                 console.log("just a video");
            }
        }
    }  
   }
}



function modal(){
    let box = document.querySelectorAll(".job-modal");
    if (box.length >= 1){
        let buttons = document.querySelectorAll(".btn-toggle-apply-modal");
        if (buttons.length >= 1){
            const modal = box[0];
            for (let btn of buttons){
                btn.onclick  = ()=>{
                    modal.classList.toggle("active");
                }                
            }
        }
    }
}



TABS(".dishes-tab", ".tab-header", ".tab-body", "li", "aside", "active");
TABS(".tabs-container", ".tabs-header", ".tab-body", "li", "aside", "active");
galleryEvents();
 
 togglenavbar(); 
 playvideointro();
 modal();