// This is what our customer data looks like.
const customerData = [
    { ssn: '444-44-4444', name: 'Bill', age: 35, email: 'bill@company.com' },
    { ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org' }
];

let db;
let request = indexedDB.open('myDatabase', 1);

request.onerror = e => { console.log(e); };
request.onupgradeneeded = e => {
    console.log(e);
    db = e.target.result;

    // Create an objectStore to hold information about our customers. We're
    // going to use 'ssn' as our key path because it's guaranteed to be
    // unique - or at least that's what I was told during the kickoff meeting.
    const objectStore = db.createObjectStore('customers', { keyPath: 'ssn' });

    // Create an index to search customers by name. We may have duplicates
    // so we can't use a unique index.
    objectStore.createIndex('name', 'name', { unique: false });

    // Create an index to search customers by email. We want to ensure that
    // no two customers have the same email, so use a unique index.
    objectStore.createIndex('email', 'email', { unique: true });

};

// Use request oncomplete to make sure the objectStore creation is finished before adding data into it.
request.oncomplete = e => {
    console.log(e);
    const customerObjectStore = db.transaction('customers', 'readwrite').objectStore('customers');
    //Store values in the newly created objectStore
    customerData.forEach(function (customer) {
        customerObjectStore.add(customer);
    });
};