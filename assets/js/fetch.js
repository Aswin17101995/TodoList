async function postData(url, data) {
    console.log("sending data is :::",data)
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    // parses JSON response into native JavaScript objects
    window.location.reload(true)
  }

  function myfun(){
    let formdata = new FormData();
    var checkbox =document.getElementsByClassName('boxes')
    for(var i in checkbox)
    {
        if(checkbox[i].checked)
        {
            formdata.append('id',checkbox[i].value)
        }
    }
    
    console.log("form data ",formdata.getAll("id"))
    postData('http://localhost:8000/delete', formdata.getAll("id"))
    .then(data => {console.log(data)});
}