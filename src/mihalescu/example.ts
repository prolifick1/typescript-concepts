interface ApiResponse {
  data: {
    hasSucceeded: boolean;
    message: string;
  };
}

function getLowercasedString(myString : string) {
  return myString.toLowerCase();
};

function getHumanReadableMessage(response: ApiResponse) {
  if (response.data.hasSucceeded) {
    return `Action succeeded: ${response.data.message}`;
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