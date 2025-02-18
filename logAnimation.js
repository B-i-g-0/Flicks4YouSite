
const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');

//set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//star properties
const starCount = 20;
const stars = [];
const maxSpeed = 2;
const maxSize = 3;

//initialize stars
for(let i = 0 ; i < starCount ; i++)
{
    stars.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        speed: Math.random()*maxSpeed,
        size: Math.random()*maxSize,
    });
}

//animate stars
function animate()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0 ; i < starCount ; i++)
    {
        const star = stars[i];

        //draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2*Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();

        //update star position
        star.y += star.speed;

        //reset star position if it goes off screen
        if(star.y > canvas.height)
        {
            star.y = -star.size;
            star.x = Math.random()*canvas.width;
        }
    }
    requestAnimationFrame(animate);
}


animate();