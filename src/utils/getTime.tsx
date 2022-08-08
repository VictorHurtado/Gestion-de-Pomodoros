export const getReturnValues = (countDown: number) => {
    // calculate time left
    const days = Math.floor(countDown / (100 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (100 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (100 * 60 * 60)) / (100 * 60));
    const seconds = Math.floor((countDown % (100 * 60)) / 100);

    return [days, hours, minutes, seconds];
};

export function transformSecondsToFormat(seconds: number): string {
    const miliseconds = seconds*1000;
    return new Date(miliseconds).toISOString().slice(11, 19);
}