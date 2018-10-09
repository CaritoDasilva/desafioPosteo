let newComments = [];

sendBtn.addEventListener('click', () => {
  commentsTxt = commentsInput.value;

  saveMessages(commentsTxt);




  commentsInput.value = "";




});

function clearComment(index) {

  newComments.splice(index, 1);
  // así es como se eliminan elementos, n define la cantidad de elementos a eliminar,
  // de esa posicion(pos) en adelante hasta el final del array.
  drawMessages(newComments);
}

function saveMessages(commentsTxt) {
  newComments.push(commentsTxt);
  console.log(newComments);
  drawMessages(newComments);
}

function drawMessages(newComments) {
  printComment.innerHTML = "";
  newComments.forEach((comment, index) => {
    printComment.innerHTML += `<div>${comment}</div><button type="button" class="btn btn-danger" onclick="clearComment(${index})">Eliminar</button>`;
    console.log(index);
  });

  console.log(commentsTxt);
}