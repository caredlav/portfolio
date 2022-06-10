const imageAboutMob1=document.getElementById("img-mob-1");
const imageAboutMob2=document.getElementById("img-mob-2");
const imageAboutDesk1=document.getElementById("img-desk-1");
const imageAboutDesk2=document.getElementById("img-desk-2");
const label1=document.getElementById('label1');
const label2=document.getElementById('label2');
const paragraph=document.getElementById('second-p');

const showImage=(inputs,observer)=>{
    inputs.forEach(input => {
        if (input.isIntersecting) {
            input.target.classList.add('visible');
        }
    });
}

const observer=new IntersectionObserver(showImage,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.7
});

observer.observe(imageAboutMob1);
observer.observe(imageAboutMob2);
observer.observe(label1);
observer.observe(label2);
observer.observe(paragraph);
observer.observe(imageAboutDesk1);
observer.observe(imageAboutDesk2);