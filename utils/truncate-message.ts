export const truncateMessage = (message:string|any) => {
    const maxWords = 3;
    const words = message.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return message;
};
