const modal = document.getElementById("modal");
const openPost = document.getElementById("openPost");
const closePost = document.getElementById("closePost");
const submitPost = document.getElementById("submitPost");

openPost.onclick = () => modal.classList.remove("hidden");
closePost.onclick = () => modal.classList.add("hidden");

submitPost.onclick = () => {
  modal.classList.add("hidden");
  alert("Posting disabled in beta UI");
};
