function slugify(title) {
    let slug = '';
    title = title.toLowerCase();
    
    for (let i = 0; i < title.length; i++) {
        let char = title[i];
        
        if (char === ' ' && slug[slug.length - 1] !== '-') {
            slug += '-';
        } else if (char.match(/[a-z0-9]/)) {
            slug += char;
        }
    }
    if (slug[slug.length - 1] === '-') {
        slug = slug.slice(0, -1);
    }
    
    return slug;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"