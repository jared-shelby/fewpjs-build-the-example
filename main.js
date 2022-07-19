// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
modal.classList.add("hidden");
document.body.addEventListener("click", event => {
  if (event.target.classList.contains("like-glyph")) {
    let status = event.target.innerHTML;
    if (status === EMPTY_HEART) {
      mimicServerCall()
        .then(success => {
          event.target.innerHTML = FULL_HEART;
          event.target.classList.add("activated-heart");
        })
        .catch(error => {
          modal.classList.remove("hidden")
          modal.innerHTML = error;
          setTimeout(() => modal.classList.add("hidden"), 3000);
        })
    } else if (status === FULL_HEART) {
      event.target.innerHTML = EMPTY_HEART;
      event.target.classList.remove("activated-heart");
    }
  }
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
