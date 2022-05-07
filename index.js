// Write your solution in this file!
let employee = {name: "Nimo",streetAddress: "Nairobi",
};

let updateEmployeeWithKeyAndValue = (employeeObject, key, value) => Object.assign({}, employeeObject, { [key]: value })

let destructivelyUpdateEmployeeWithKeyAndValue = (employeeObject, key, value) => {
	employeeObject[key] = value;
	return employeeObject;
}

let deleteFromEmployeeByKey = (employeeObject, key) => {
	const newEmployeeObject = Object.assign({}, employeeObject);
	delete newEmployeeObject[key];
	return newEmployeeObject;
}

let destructivelyDeleteFromEmployeeByKey = (employeeObject, key) => {
	delete employeeObject[key];
	return employeeObject;
}
