const newYears = '1 Jan 2022';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date = new Date();
    const seconds = (newYearsDate - currentDate) / 1000;

    const day =Math.floor(seconds / 3600 / 24);


    console.log(newYearsDate - currentDate);

}
// intial call
countdown();

setInterval(countdown, 1000);
