function createObjectWithAssignment(initialData, key, value) {
    const data = { ...initialData };
    data[key] = value;
    return data;
}

module.exports = createObjectWithAssignment;