const editJsonFile = require("edit-json-file");
const file = editJsonFile("mocks/calculations/storedData.json", {
  autosave: true
});

const reqBody = JSON.parse(request.body)
const interestRate = reqBody.interest / 100

const res = {
    value: reqBody.value,
    interest: reqBody.interest,
    interestRate,
    calculated: reqBody.value * interestRate
}

file.append("calculations", res)
file.save()

module.exports = res;