class Msg extends HTMLElement {
constructor(txt = "Empty message", opt = {}) {
  super();
  this.content          = document.createElement("div");
  this.ok               = document.createElement("button");
  this.cancel           = document.createElement("button");
  this.content.innerHTML= txt;
  this.ok.innerHTML     = "Ok";
  this.cancel.innerHTML = "Cancel";
  this.appendChild(this.content);
  if(opt.id===3)this.appendChild(this.cancel);
  if(!opt.t)this.appendChild(this.ok);
  dom.dialog.push(this);
  this.ok.onclick    =()=>{if(opt.cbt)opt.cbt();this.remove()}
  this.cancel.onclick=()=>{if(opt.cbf)opt.cbf();this.remove()}
  this.ok.focus();
  if(opt.t)setTimeout(()=>{this.remove()},opt.t);
}

static quick  (txt)   { new Msg(txt, {id:0, t:1000})}
static long   (txt)   { new Msg(txt, {id:1, t:3000})}
static confirm(txt)   { new Msg(txt, {id:2})}
static choice (txt,cbTrue,cbFalse){ new Msg(txt, {id:3,cbt:cbTrue, cbf:cbFalse})}
}
 

customElements.define('ui-msg', Msg);
  