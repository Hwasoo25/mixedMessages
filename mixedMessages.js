

const mixedMessages = () => {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let randomIndex = Math.floor(Math.random() * days.length);
    let randomDay = days[randomIndex];
    return randomDay;
}

// Example usage
console.log(mixedMessages());