var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"start 90%",
    end:"bottom 90%",
    scrub:"true",
}})
tl.to("#fanta",{
    top:"120%",
    left:"0%"
},'orange')
tl.to("#orange",{
    top:"160%",
    left:"23%"
},'orange')
tl.to("#leaf1",{
    top:"160%",
    left:"0%"
},'leaf1')
tl.to("#leaf2", {
  top: "110%",
  left: "80%",
}, "leaf2")
var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"start 90%",
    end:"bottom 90%",
    scrub:"true",
}})
tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-50%",
    top:"-10%"
},'ca')
tl2.from(".lemon2", {
    rotate: "90deg",
    right: "-50%",
    top: "-10%"
}, "ca")
tl2.to("#orange",{
    width:"17vw",
    left:"42%",
    top:"200%",

},'ca')
tl2.to("#fanta",{
    width:"25%",
    top:"210%",
    left:"38%"
},'ca')




