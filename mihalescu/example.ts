interface ApiResponse {
  data: {
    hasSucceeded: boolean;
    message: string;
  };
}

function getLowercasedString(myStrinstring) {
  return myString.toLowerCase();
};

function getHumanReadableMessage(response: ApiResponse) {
  if (response.data.hasSucceeded) {
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