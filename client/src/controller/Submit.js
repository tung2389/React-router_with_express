
async function submit(url,data)
{
  await fetch(url,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:data
  }).then(res => res.text()
    .then(res => alert(res)));
};

export default submit;