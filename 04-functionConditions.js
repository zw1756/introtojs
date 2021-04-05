function isEligibleForVoting(age) {
    // if age is more than or equal to 18, log 'Yes.' to console else 'No.'
    if (age >= 18) {
        console.log('Yes.');
    } else {
        console.log('No.');
    }
}

// check if function works correctly
// check the console for output
isEligibleForVoting(15);

isEligibleForVoting(20);