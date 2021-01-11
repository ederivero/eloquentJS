function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    };
    if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object") {
        return false;
    }
    for (const key of Object.keys(obj1)) {
        if (!Object.keys(obj2).includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}