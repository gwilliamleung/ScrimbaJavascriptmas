import podcasts from "./day 20 data";

/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function getFreePodcasts(data){
   const freePodcasts = data.filter((podcast)=> podcast.paid === false);
   return freePodcasts.map((podcast)=> ({
    title: podcast.title,
    rating: podcast.rating,
    paid:podcast.paid
   }))
}

console.log(getFreePodcasts(podcasts))
