 import { gsap } from "gsap";


const mainTL = gsap.timeline();

mainTL

.from("#hero article", {duration:2, alpha:0, yPercent:-100,   ease:"circ.out", scale:2})
.from("#hero #line1", {duration:2, alpha:0, xPercent:-50,  ease: "sine.out"}, "herotext")
.from("#hero #line2", {duration:2, alpha:0, xPercent:50, ease: "sine.out"}, "herotext")
.from("#hero h2", { duration:1.5, alpha:0, yPercent:-50, ease: "back.out"},"content")
.from("#content h1", { duration:2, alpha:0, xPercent:-50,  ease: "back.out"}, "content") 
.from("#content p", {duration:2, alpha:0, xPercent:50,  ease: "back.out"},"content")
;
