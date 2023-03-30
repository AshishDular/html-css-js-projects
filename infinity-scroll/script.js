// Unsplash API
const count = 10;
const apiKey = "US2WxVpZ0ErdHru1PH7Oup_V6R4vfk2jdMjqCnR6zCQ";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
  } catch (error) {
    // Catch Error here
  }
}

// On Load
getPhotos();
