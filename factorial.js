function factorial(value) {
    if (value > 1) {
        return value * factorial(value - 1);
    } else {
        return value;
    }
}
