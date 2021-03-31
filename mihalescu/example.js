function getLowercasedString(myString) {
  return myString.toLowerCase();
}

function getHumanReadableMessage(response) {
  if(response.data.hasSucceeded) {
    return `Action succeeded: ${response.message}`;
  }
  return `Oops, something went wrong`;
}

const apiResponse = {
  data: {
    hasSucceeded: true,
    message: 'Successful login'
  }
};

console.log(getHumanReadableMessage(apiResponse));