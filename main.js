
let myleads = [];
let oldleads=[];

const inputel = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputbtn = document.getElementById("input-btn")
const deletebtn = document.getElementById("dlt-btn")
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))

const tabbtn=document.getElementById("save-btn")


  
 tabbtn.addEventListener("click",function(){
 // chrome.tabs.query({currentWindow: true, active: true}, function(tabs){})


     chrome.tabs.query({active:true,currentWindow:true}, function(tabs){


myleads.push(tabs[0].url)
localStorage.setItem("myleads", JSON.stringify(myleads))
render(myleads)
     })


    

 })
 


if (leadsfromlocalstorage) {
  myleads = leadsfromlocalstorage
  render(myleads)
}
function render(leads) {
  let listitems = ""
  for (let i = 0; i < leads.length; i++) {
    //listitems+="<li><a  target='_blank' href='"+myleads[i]+"'>"+ myleads[i] + "</a></li>"
    listitems += `
    <li>
       <a  target='_blank' href='${leads}'>
            ${leads[i]}
         </a>
    </li>`

  }
  ulEl.innerHTML = listitems

}

deletebtn.addEventListener("dblclick", function () {
  localStorage.clear()
  myleads = []
  render(myleads)
})

inputbtn.addEventListener("click", function () {
  myleads.push(inputel.value)
  inputel.value = "";
  localStorage.setItem("myleads", JSON.stringify(myleads))
  render(myleads)

})
